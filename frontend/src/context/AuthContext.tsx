import React, { createContext, useContext, useState, ReactNode } from "react";
import { User, mockUsers } from "@/data/mockData";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  register: (
    name: string,
    email: string,
    password: string,
    role: User["role"]
  ) => boolean;
  logout: () => void;
  hasRole: (roles: User["role"][]) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  // Login
  const login = (email: string, _password: string) => {
    const foundUser = mockUsers.find((u) => u.email === email);

    if (!foundUser) {
      return false;
    }

    setUser(foundUser);
    return true;
  };

  // Register
  const register = (
    name: string,
    email: string,
    _password: string,
    role: User["role"]
  ) => {
    const newUser: User = {
      id: `u-${Date.now()}`,
      name,
      email,
      role,
      skills: [],
      taskCount: 0,
    };

    setUser(newUser);
    return true;
  };

  // Logout
  const logout = () => {
    setUser(null);
  };

  // Role check helper
  const hasRole = (roles: User["role"][]) => {
    if (!user) return false;
    return roles.includes(user.role);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        hasRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook to access auth context
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
