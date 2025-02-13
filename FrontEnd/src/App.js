import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import HomePage from './Components/HomePage';
import { AuthProvider } from './Context/AuthContext';

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;