// src/utils/AuthGuard.tsx
import React from "react";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }: { children: JSX.Element }) => {
  
  const token = localStorage.getItem("token");

  if (!token) {
    
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthGuard;
