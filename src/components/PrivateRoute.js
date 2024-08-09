import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem("user");

  const parsedUser = JSON.parse(user || "{}");

  return parsedUser ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
