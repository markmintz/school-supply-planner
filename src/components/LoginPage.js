import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { currentUser, login, isLoading, users } = useAuth();

  // Sample users for quick login (demo purposes)
  const sampleUsers = [
    { name: 'Mrs. Johnson (Teacher)', email: 'johnson@school.edu', role: 'teacher' },
    { name: 'Emma Thompson (Student)', email: 'emma.thompson@student.school.edu', role: 'student' },
    { name: 'David Thompson (Parent)', email: 'david.thompson@parent.school.edu', role: 'parent' }
  ];

  useEffect(() => {
    if (currentUser) {
      // Clear form when user logs in
      setEmail('');
      setPassword('');
      setError('');
    }
  }, [currentUser]);

  if (currentUser) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    const result = await login(email, password);
    if (!result.success) {
      setError(result.error);
    }
  };

  const handleQuickLogin = (userEmail) => {
    setEmail(userEmail);
    setPassword('password'); // For demo, any password works
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1>School Supply Planner</h1>
            <p>Sign in to view your classes and supply lists</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" disabled={isLoading} className="login-btn">
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="demo-section">
            <h3>Demo Users (Click to login):</h3>
            <div className="demo-users">
              {sampleUsers.map((user, index) => (
                <button
                  key={index}
                  className="demo-user-btn"
                  onClick={() => handleQuickLogin(user.email)}
                  disabled={isLoading}
                >
                  <div className="demo-user-name">{user.name}</div>
                  <div className="demo-user-role">{user.role}</div>
                </button>
              ))}
            </div>
            <p className="demo-note">
              This is a demo application. Any password will work for these sample accounts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
