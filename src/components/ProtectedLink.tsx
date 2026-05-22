import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { usePassword } from "@/contexts/PasswordContext";

interface ProtectedLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

const ProtectedLink = ({ to, children, className }: ProtectedLinkProps) => {
  const { isAuthenticated, setShowPasswordDialog, setPendingNavigation } = usePassword();

  const handleClick = (e: React.MouseEvent) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setPendingNavigation(to);
      setShowPasswordDialog(true);
    }
  };

  return (
    <Link to={to} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

export default ProtectedLink;
