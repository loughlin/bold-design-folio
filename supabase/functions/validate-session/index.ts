import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1"

// Allowed origins for CORS - restrict to specific domains
const allowedOriginPatterns = [
  /^https:\/\/mission-design-hub\.lovable\.app$/,
  /^https:\/\/.*\.lovable\.app$/,
  /^https:\/\/.*\.lovableproject\.com$/,
  /^http:\/\/localhost:\d+$/,
];

const isOriginAllowed = (origin: string): boolean => {
  return allowedOriginPatterns.some(pattern => pattern.test(origin));
};

const getCorsHeaders = (req: Request) => {
  const origin = req.headers.get('origin') || '';
  const allowedOrigin = isOriginAllowed(origin) ? origin : 'https://mission-design-hub.lovable.app';
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Credentials': 'true',
  };
};

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

    const { sessionToken } = await req.json();
    
    if (!sessionToken || typeof sessionToken !== 'string') {
      console.log('Session validation failed: No token provided');
      return new Response(
        JSON.stringify({ valid: false, error: 'Session token is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (sessionToken.length > 100) {
      return new Response(
        JSON.stringify({ valid: false, error: 'Invalid session token' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check if session exists and is not expired
    const { data: session, error: sessionError } = await supabase
      .from('portfolio_sessions')
      .select('*')
      .eq('token', sessionToken)
      .gt('expires_at', new Date().toISOString())
      .maybeSingle();

    if (sessionError) {
      console.error('Error validating session:', sessionError);
      return new Response(
        JSON.stringify({ valid: false, error: 'Session validation failed' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!session) {
      console.log('Session validation failed: Invalid or expired token');
      return new Response(
        JSON.stringify({ valid: false }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Session validated successfully for token: ${sessionToken.substring(0, 8)}...`);
    
    return new Response(
      JSON.stringify({ valid: true }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error validating session:', error);
    return new Response(
      JSON.stringify({ valid: false, error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});