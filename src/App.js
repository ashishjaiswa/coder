// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminRoutes from './Routes/AdminRoutes';
import UserRoutes from './Routes/UserRoutes';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin routes are prefixed with "/admin" */}
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* User routes are prefixed with "/user" */}
        <Route path="/" element={<UserRoutes />} />

        {/* Optionally, a default home route */}
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}


export default App;
