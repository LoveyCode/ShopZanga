import React from 'react';
import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <div className="admin-content">
        <Outlet /> {/* This renders AddProduct or ListProduct */}
      </div>
    </div>
  );
};

export default Admin;
