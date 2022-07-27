import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ page }) => {
  const token = localStorage.getItem('tokenId');
  return <>{token ? page : <Navigate replace to="/" />}</>;
};

export default PrivateRoute;
