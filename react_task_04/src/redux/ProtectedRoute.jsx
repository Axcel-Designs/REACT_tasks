import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = useSelector((state) => state.authKey.isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}
