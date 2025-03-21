import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../services/firebase.js';

const PrivateRoute: React.FC<{children: React.ReactNode}> = ({children}) => {
  return auth.currentUser ? <>{children}</> : <Navigate to='/signin'/>
}

export default PrivateRoute;