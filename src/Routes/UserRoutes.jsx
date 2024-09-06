// src/routes/UserRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserLogin from '../sceens/user/UserLogin';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLogin />} />
      {/* <Route path="settings" element={<UserSettings />} /> */}
    </Routes>
  );
};

export default UserRoutes;
