import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { isUserAuthenticated, userRole } = useAuth();

  if (isUserAuthenticated && userRole === "admin") {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AdminRoute;
