import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('https://zanga-dtb7.onrender.com/admin/protected', {
          credentials: 'include',
        });
        setAuthorized(res.ok);
      } catch {
        setAuthorized(false);
      }
    };
    checkAuth();
  }, []);

  if (authorized === null) return <p>Checking...</p>;
  return authorized ? children : <Navigate to="/admin-login" />;
};

export default ProtectedRoute;
