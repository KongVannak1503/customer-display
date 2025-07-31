import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Dashboard from './pages/default/Dashboard';
import './App.css'
import Settings from './pages/default/Settings';
import LiveCartPage from './pages/live-cart/LiveCartPage';
import DiscountPage from './pages/discount/DiscountPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="live-cart" element={<LiveCartPage />} />
      <Route path="discount" element={<DiscountPage />} />
    </Routes>
  );
}
