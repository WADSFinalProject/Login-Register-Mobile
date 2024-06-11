import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import PhoneRegisterPage from './PhoneRegisterPage'; // Import the component
import ResetPasswordPage from './ResetPasswordPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/register-phone" element={<PhoneRegisterPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
