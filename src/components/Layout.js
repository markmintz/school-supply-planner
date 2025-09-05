import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
  const { currentUser, logout, users, switchUser } = useAuth();

  const handleUserSwitch = (e) => {
    const userId = parseInt(e.target.value);
    if (userId && userId !== currentUser.id) {
      switchUser(userId);
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'teacher':
        return '👨‍🏫';
      case 'student':
        return '👨‍🎓';
      case 'parent':
        return '👨‍👩‍👧‍👦';
      default:
        return '👤';
    }
  };

  return (
    <div className="layout">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <h1>📚 Supply Pal</h1>
          </div>
          
          <nav className="nav">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Dashboard
            </NavLink>
            <NavLink to="/supplies" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              All Supplies
            </NavLink>
          </nav>

          <div className="user-section">
            <div className="user-info">
              <span className="user-icon">{getRoleIcon(currentUser.role)}</span>
              <div className="user-details">
                <span className="user-name">{currentUser.name}</span>
                <span className="user-role">{currentUser.role}</span>
              </div>
            </div>
            
            {/* Demo: User switcher for testing */}
            <select onChange={handleUserSwitch} value={currentUser.id} className="user-switcher">
              <option value="">Switch User (Demo)</option>
              {users.filter(u => u.role === 'teacher').length > 0 && (
                <optgroup label="Teachers">
                  {users.filter(u => u.role === 'teacher').map(user => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </optgroup>
              )}
              {users.filter(u => u.role === 'student').length > 0 && (
                <optgroup label="Students">
                  {users.filter(u => u.role === 'student').map(user => (
                    <option key={user.id} value={user.id}>
                      {user.name} (Grade {user.grade})
                    </option>
                  ))}
                </optgroup>
              )}
              {users.filter(u => u.role === 'parent').length > 0 && (
                <optgroup label="Parents">
                  {users.filter(u => u.role === 'parent').map(user => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </optgroup>
              )}
            </select>

            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
