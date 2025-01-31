import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContextProvider } from './UserContext';
import IndexPage from './Pages/IndexPage';
import RegistrationPage from './Pages/RegistrationPage';
import './App.css'; 
import LoginPage from './Pages/LoginPage';
import HomePage from './HomePage';
import Profile from './Profile';
import Connect from './Pages/Connect';

const App = () => {
  return (
    <Router>
      <UserContextProvider>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </div>
      </UserContextProvider>
    </Router>
  );
};

export default App;
