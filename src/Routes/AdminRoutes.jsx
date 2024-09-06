// src/routes/AdminRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLogin from '../sceens/admin/AdminLogin';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={< AdminLogin/>} />
      {/* <Route path="settings" element={<AdminSettings />} /> */}
    </Routes>
  );
};

export default AdminRoutes;
