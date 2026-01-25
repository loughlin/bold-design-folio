import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";

interface PasswordContextType {
  isAuthenticated: boolean;
  authenticate: (password: string) => Promise<boolean>;
  isAuthenticating: boolean;
  showPasswordDialog: boolean;
  setShowPasswordDialog: (show: boolean) => void;
  pendingNavigation: string | null;
  setPendingNavigation: (path: string | null) => void;
}

const PasswordContext = createContext<PasswordContextType | undefined>(undefined);

const SESSION_TOKEN_KEY = "portfolio_session_token";

// Generate a simple session token for server-side validation
const generateSessionToken = (): string => {
  return crypto.randomUUID();
};

export const PasswordProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<string | null>(null);

  useEffect(() => {
    // Check for existing valid session
    const sessionToken = sessionStorage.getItem(SESSION_TOKEN_KEY);
    if (sessionToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const authenticate = async (password: string): Promise<boolean> => {
    setIsAuthenticating(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('validate-password', {
        body: { password }
      });

      if (error) {
        console.error('Authentication error:', error);
        setIsAuthenticating(false);
        return false;
      }

      if (data?.valid) {
        const sessionToken = generateSessionToken();
        sessionStorage.setItem(SESSION_TOKEN_KEY, sessionToken);
        setIsAuthenticated(true);
        setIsAuthenticating(false);
        return true;
      }

      setIsAuthenticating(false);
      return false;
    } catch (error) {
      console.error('Authentication error:', error);
      setIsAuthenticating(false);
      return false;
    }
  };

  return (
    <PasswordContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        isAuthenticating,
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
