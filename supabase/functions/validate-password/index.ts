import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1"

// Allowed origins for CORS - restrict to specific domains
const allowedOriginPatterns = [
  /^https:\/\/jamesloughlin\.design$/,
  /^https:\/\/www\.jamesloughlin\.design$/,
  /^http:\/\/localhost:\d+$/,
];

const isOriginAllowed = (origin: string): boolean => {
  return allowedOriginPatterns.some(pattern => pattern.test(origin));
};

const getCorsHeaders = (req: Request) => {
  const origin = req.headers.get('origin') || '';
  const allowedOrigin = isOriginAllowed(origin) ? origin : 'https://jamesloughlin.design';
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Credentials': 'true',
  };
};

// Rate limiting configuration
const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION_MINUTES = 15;
const ATTEMPT_WINDOW_MINUTES = 15;

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client with service role for database access
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get client IP from headers (Supabase Edge Functions provide this)
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('cf-connecting-ip') || 
                     req.headers.get('x-real-ip') || 
                     'unknown';

    // Check rate limiting - count recent failed attempts from this IP
    const windowStart = new Date(Date.now() - ATTEMPT_WINDOW_MINUTES * 60 * 1000).toISOString();
    
    const { data: recentAttempts, error: attemptsError } = await supabase
      .from('password_attempts')
      .select('id')
      .eq('ip_address', clientIP)
      .eq('success', false)
      .gte('attempted_at', windowStart);

    if (attemptsError) {
      console.error('Error checking rate limit:', attemptsError);
    }

    const failedAttempts = recentAttempts?.length || 0;

    if (failedAttempts >= MAX_ATTEMPTS) {
      console.log(`Rate limit exceeded for IP: ${clientIP} (${failedAttempts} failed attempts)`);
      return new Response(
        JSON.stringify({ 
          valid: false, 
          error: `Too many failed attempts. Please try again in ${LOCKOUT_DURATION_MINUTES} minutes.`,
          rateLimited: true 
        }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { password } = await req.json();
    
    if (!password || typeof password !== 'string') {
      console.log('Password validation failed: No password provided');
      return new Response(
        JSON.stringify({ valid: false, error: 'Password is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (password.length > 256) {
      return new Response(
        JSON.stringify({ valid: false, error: 'Invalid input' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const correctPassword = Deno.env.get('PORTFOLIO_PASSWORD');
    
    if (!correctPassword) {
      console.error('PORTFOLIO_PASSWORD secret is not configured');
      return new Response(
        JSON.stringify({ valid: false, error: 'Server configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const isValid = password === correctPassword;
    
    // Log the attempt
    const { error: logError } = await supabase
      .from('password_attempts')
      .insert({
        ip_address: clientIP,
        success: isValid
      });

    if (logError) {
      console.error('Error logging attempt:', logError);
    }

    console.log(`Password validation attempt from ${clientIP}: ${isValid ? 'SUCCESS' : 'FAILED'}`);

    if (isValid) {
      // Generate a secure session token
      const sessionToken = crypto.randomUUID();
      
      // Store session in database with expiration (24 hours)
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
      
      const { error: sessionError } = await supabase
        .from('portfolio_sessions')
        .insert({
          token: sessionToken,
          ip_address: clientIP,
          expires_at: expiresAt
        });

      if (sessionError) {
        console.error('Error creating session:', sessionError);
        return new Response(
          JSON.stringify({ valid: false, error: 'Failed to create session' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Clean up expired sessions and old attempts periodically
      try {
        await supabase.rpc('cleanup_expired_sessions');
      } catch (cleanupErr) {
        console.error('Cleanup error (non-critical):', cleanupErr);
      }

      return new Response(
        JSON.stringify({ valid: true, sessionToken }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ valid: false }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error validating password:', error);
    return new Response(
      JSON.stringify({ valid: false, error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});