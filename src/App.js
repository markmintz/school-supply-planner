import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import ClassDetail from './components/ClassDetail';
import SupplyList from './components/SupplyList';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="class/:id" element={<ClassDetail />} />
            <Route path="supplies" element={<SupplyList />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
