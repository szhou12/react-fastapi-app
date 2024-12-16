import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import Register from './components/Register';
import LoginStaff from './components/LoginStaff';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login-staff" element={<LoginStaff />} />
      </Routes>
    </Router>
  );
}

export default App;