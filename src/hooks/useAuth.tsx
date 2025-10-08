import { useState, useEffect } from 'react';

// Hardcoded admin credentials
const ADMIN_EMAIL = 'admin@devkraft.co';
const ADMIN_PASSWORD = 'devkraft123';
const AUTH_KEY = 'devkraft_admin_auth';

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // Check if user is already authenticated
    const isAuth = localStorage.getItem(AUTH_KEY) === 'true';
    setAuthState({ isAuthenticated: isAuth, isLoading: false });
  }, []);

  const login = (email: string, password: string): boolean => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem(AUTH_KEY, 'true');
      setAuthState({ isAuthenticated: true, isLoading: false });
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    setAuthState({ isAuthenticated: false, isLoading: false });
  };

  return {
    ...authState,
    login,
    logout,
  };
};