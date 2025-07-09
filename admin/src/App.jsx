import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Admin from './Pages/Admin/Admin';
import ProtectedRoute from './Components/ProtectedRoute';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './Pages/adminLogin/adminLogin';
import AddProduct from './Components/AddProduct/AddProduct';
import ListProduct from './Components/ListProduct/ListProduct';

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* Public Route */}
       <Route path="/" element={<Navigate to="/admin-login" />} />
        <Route path="/admin-login" element={<AdminLogin />} />


   

        {/* Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        >
          {/* Redirect /admin to /admin/addproduct */}
          <Route index element={<Navigate to="addproduct" />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="listproduct" element={<ListProduct />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
