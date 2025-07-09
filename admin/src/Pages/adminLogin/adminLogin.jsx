import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import './adminLogin.css';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://zanga-dtb7.onrender.com/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ password }),
      });

      const data = await response.json();
      if (data.success) {
        navigate('/admin/addproduct');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      alert('Login error');
      console.error(err);
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-box">
        <h2>Admin Login</h2>
        <div className="password-input-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="password-toggle-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default AdminLogin;
