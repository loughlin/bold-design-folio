-- Update the default session expiry from 24 hours to 7 days
ALTER TABLE public.portfolio_sessions 
ALTER COLUMN expires_at SET DEFAULT (now() + INTERVAL '7 days');