-- Revoke all public permissions on password_attempts table
-- This adds defense-in-depth on top of the deny-all RLS policy
REVOKE ALL ON public.password_attempts FROM anon;
REVOKE ALL ON public.password_attempts FROM authenticated;

-- Revoke all public permissions on portfolio_sessions table
-- This adds defense-in-depth on top of the deny-all RLS policy
REVOKE ALL ON public.portfolio_sessions FROM anon;
REVOKE ALL ON public.portfolio_sessions FROM authenticated;