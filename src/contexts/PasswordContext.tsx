import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { SESSION_TOKEN_KEY } from "@/constants";

interface PasswordContextType {
  isAuthenticated: boolean;
  authenticate: (password: string) => Promise<{ success: boolean; error?: string }>;
  isAuthenticating: boolean;
  isValidatingSession: boolean;
  showPasswordDialog: boolean;
  setShowPasswordDialog: (show: boolean) => void;
  pendingNavigation: string | null;
  setPendingNavigation: (path: string | null) => void;
}

const PasswordContext = createContext<PasswordContextType | undefined>(undefined);

export const PasswordProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isValidatingSession, setIsValidatingSession] = useState(true);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<string | null>(null);

  // Validate existing session on mount - SERVER-SIDE VALIDATION
  useEffect(() => {
    const validateExistingSession = async () => {
      const sessionToken = localStorage.getItem(SESSION_TOKEN_KEY);
      
      if (!sessionToken) {
        setIsValidatingSession(false);
        return;
      }

      try {
        const { data, error } = await supabase.functions.invoke('validate-session', {
          body: { sessionToken }
        });

        if (error) {
          console.error('Session validation error:', error);
          localStorage.removeItem(SESSION_TOKEN_KEY);
          setIsAuthenticated(false);
        } else if (data?.valid) {
          setIsAuthenticated(true);
        } else {
          // Session is invalid or expired - clear it
          localStorage.removeItem(SESSION_TOKEN_KEY);
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Session validation error:', error);
        localStorage.removeItem(SESSION_TOKEN_KEY);
        setIsAuthenticated(false);
      } finally {
        setIsValidatingSession(false);
      }
    };

    validateExistingSession();
  }, []);

  const authenticate = async (password: string): Promise<{ success: boolean; error?: string }> => {
    setIsAuthenticating(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('validate-password', {
        body: { password }
      });

      if (error) {
        console.error('Authentication error:', error);
        setIsAuthenticating(false);
        return { success: false, error: 'Authentication failed. Please try again.' };
      }

      // Check for rate limiting
      if (data?.rateLimited) {
        setIsAuthenticating(false);
        return { success: false, error: data.error || 'Too many attempts. Please try again later.' };
      }

      if (data?.valid && data?.sessionToken) {
        // Store the server-generated session token
        localStorage.setItem(SESSION_TOKEN_KEY, data.sessionToken);
        setIsAuthenticated(true);
        setIsAuthenticating(false);
        return { success: true };
      }

      setIsAuthenticating(false);
      return { success: false, error: 'Invalid password. Please try again.' };
    } catch (error) {
      console.error('Authentication error:', error);
      setIsAuthenticating(false);
      return { success: false, error: 'Authentication failed. Please try again.' };
    }
  };

  return (
    <PasswordContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        isAuthenticating,
        isValidatingSession,
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
