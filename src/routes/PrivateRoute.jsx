import React, { useContext } from "react";
import { Authcontect } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  // console.log(location);
  const { user, loading } = useContext(Authcontect);
  if (loading) {
    return <progress className="progress w-full"></progress>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default PrivateRoute;
