import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface PasswordContextType {
  isAuthenticated: boolean;
  authenticate: (password: string) => boolean;
  showPasswordDialog: boolean;
  setShowPasswordDialog: (show: boolean) => void;
  pendingNavigation: string | null;
  setPendingNavigation: (path: string | null) => void;
}

const PasswordContext = createContext<PasswordContextType | undefined>(undefined);

const CORRECT_PASSWORD = "IowaDesign101";
const SESSION_KEY = "portfolio_authenticated";

export const PasswordProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<string | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (stored === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const authenticate = (password: string): boolean => {
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem(SESSION_KEY, "true");
      return true;
    }
    return false;
  };

  return (
    <PasswordContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        showPasswordDialog,
        setShowPasswordDialog,
        pendingNavigation,
        setPendingNavigation,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};

export const usePassword = () => {
  const context = useContext(PasswordContext);
  if (context === undefined) {
    throw new Error("usePassword must be used within a PasswordProvider");
  }
  return context;
};
