import React, { createContext, useContext, useState } from 'react';
import { users, getUserById } from '../data/mockData';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Find user by email (password checking is simulated)
    const user = users.find(u => u.email === email);
    
    if (user) {
      setCurrentUser(user);
      setIsLoading(false);
      return { success: true };
    } else {
      setIsLoading(false);
      return { success: false, error: 'Invalid email or password' };
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const switchUser = (userId) => {
    const user = getUserById(userId);
    if (user) {
      setCurrentUser(user);
    }
  };

  const value = {
    currentUser,
    login,
    logout,
    switchUser,
    isLoading,
    users // For demo purposes, expose all users
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
