-- Drop and recreate the cleanup function with execution logging
CREATE OR REPLACE FUNCTION public.cleanup_expired_sessions()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  sessions_deleted INTEGER;
  attempts_deleted INTEGER;
BEGIN
  RAISE NOTICE 'Cleanup started at %', now();
  
  -- Delete expired sessions and count
  DELETE FROM public.portfolio_sessions WHERE expires_at < now();
  GET DIAGNOSTICS sessions_deleted = ROW_COUNT;
  
  -- Delete old attempts and count
  DELETE FROM public.password_attempts WHERE attempted_at < now() - INTERVAL '1 hour';
  GET DIAGNOSTICS attempts_deleted = ROW_COUNT;
  
  RAISE NOTICE 'Cleanup completed at %: % sessions deleted, % attempts deleted', now(), sessions_deleted, attempts_deleted;
END;
$$;