-- Create table for server-side session management
CREATE TABLE public.portfolio_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  token TEXT NOT NULL UNIQUE,
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() + INTERVAL '24 hours')
);

-- Create table for rate limiting password attempts
CREATE TABLE public.password_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address TEXT NOT NULL,
  attempted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  success BOOLEAN NOT NULL DEFAULT false
);

-- Create index for efficient lookups
CREATE INDEX idx_password_attempts_ip_time ON public.password_attempts(ip_address, attempted_at);
CREATE INDEX idx_portfolio_sessions_token ON public.portfolio_sessions(token);
CREATE INDEX idx_portfolio_sessions_expires ON public.portfolio_sessions(expires_at);

-- Enable RLS on both tables (no client access - only edge functions with service role)
ALTER TABLE public.portfolio_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.password_attempts ENABLE ROW LEVEL SECURITY;

-- No RLS policies needed - these tables are only accessed by edge functions using service role key
-- which bypasses RLS entirely

-- Create cleanup function for expired sessions and old attempts
CREATE OR REPLACE FUNCTION public.cleanup_expired_sessions()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Delete expired sessions
  DELETE FROM public.portfolio_sessions WHERE expires_at < now();
  -- Delete attempts older than 1 hour
  DELETE FROM public.password_attempts WHERE attempted_at < now() - INTERVAL '1 hour';
END;
$$;