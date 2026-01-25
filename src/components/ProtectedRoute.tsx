import { ReactNode, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { usePassword } from "@/contexts/PasswordContext";
import { supabase } from "@/integrations/supabase/client";

interface ProtectedRouteProps {
  children: ReactNode;
}

const SESSION_TOKEN_KEY = "portfolio_session_token";

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, setShowPasswordDialog, setPendingNavigation } = usePassword();
  const [isValidating, setIsValidating] = useState(false);
  const [sessionValid, setSessionValid] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Revalidate session on every route change for defense-in-depth
  useEffect(() => {
    const validateSession = async () => {
      const sessionToken = sessionStorage.getItem(SESSION_TOKEN_KEY);
      
      if (!sessionToken) {
        setSessionValid(false);
        return;
      }

      setIsValidating(true);
      try {
        const { data, error } = await supabase.functions.invoke('validate-session', {
          body: { sessionToken }
        });

        if (error || !data?.valid) {
          // Session invalid - clear it and redirect
          sessionStorage.removeItem(SESSION_TOKEN_KEY);
          setSessionValid(false);
        } else {
          setSessionValid(true);
        }
      } catch (err) {
        console.error('Session validation error:', err);
        sessionStorage.removeItem(SESSION_TOKEN_KEY);
        setSessionValid(false);
      } finally {
        setIsValidating(false);
      }
    };

    if (isAuthenticated) {
      validateSession();
    } else {
      setSessionValid(false);
    }
  }, [isAuthenticated, location.pathname]);

  useEffect(() => {
    if (sessionValid === false && !isValidating) {
      setPendingNavigation(window.location.pathname);
      setShowPasswordDialog(true);
      navigate("/");
    }
  }, [sessionValid, isValidating, navigate, setShowPasswordDialog, setPendingNavigation]);

  // Show nothing while validating or if session is invalid
  if (isValidating || sessionValid !== true) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
