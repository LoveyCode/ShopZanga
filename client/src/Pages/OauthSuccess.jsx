// src/pages/OauthSuccess.jsx
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Cookies from 'js-cookie';

const OauthSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
     Cookies.set('auth_token', token, { expires: 1 }); // save token in cookie
      navigate('/'); // redirect to homepage or dashboard
    }
  }, [navigate, searchParams]);

  return <p>Logging in with Google...</p>;
};

export default OauthSuccess;
