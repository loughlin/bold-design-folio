import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePassword } from "@/contexts/PasswordContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, setShowPasswordDialog, setPendingNavigation } = usePassword();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      setPendingNavigation(window.location.pathname);
      setShowPasswordDialog(true);
      navigate("/");
    }
  }, [isAuthenticated, navigate, setShowPasswordDialog, setPendingNavigation]);

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
