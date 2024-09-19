// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Get token from local storage
  return token ? children : <Navigate to="/login" />; // If token exists, render the component, otherwise redirect to login
};

export default PrivateRoute;
