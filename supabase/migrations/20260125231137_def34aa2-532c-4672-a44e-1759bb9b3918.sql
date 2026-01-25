-- Add deny-all RLS policies for defense-in-depth
-- Edge functions using service_role key will bypass these, but client-side access will be blocked

-- Deny all client access to portfolio_sessions
CREATE POLICY "deny_all_portfolio_sessions" ON public.portfolio_sessions
  FOR ALL USING (false) WITH CHECK (false);

-- Deny all client access to password_attempts  
CREATE POLICY "deny_all_password_attempts" ON public.password_attempts
  FOR ALL USING (false) WITH CHECK (false);