import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getUserClasses, getSuppliesByIds, getUserById } from '../data/mockData';

const Dashboard = () => {
  const { currentUser } = useAuth();
  const userClasses = getUserClasses(currentUser);

  const getWelcomeMessage = () => {
    switch (currentUser.role) {
      case 'teacher':
        return `Welcome back, ${currentUser.name}! Here are your classes and required supplies.`;
      case 'student':
        return `Hi ${currentUser.name}! Check out your classes and what supplies you'll need.`;
      case 'parent':
        const children = currentUser.childrenIds.map(id => getUserById(id)).filter(Boolean);
        return `Hello ${currentUser.name}! Here's what your ${children.length > 1 ? 'children' : 'child'} ${children.map(c => c.name).join(' and ')} need${children.length === 1 ? 's' : ''} for school.`;
      default:
        return `Welcome, ${currentUser.name}!`;
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <p className="welcome-message">{getWelcomeMessage()}</p>
      </div>

      <div className="dashboard-content">
        <div className="classes-section">
          <h3>
            {currentUser.role === 'teacher' ? 'Your Classes' : 
             currentUser.role === 'student' ? 'Your Classes' : 
             'Your Children\'s Classes'}
          </h3>
          {userClasses.length > 0 ? (
            <div className="classes-grid">
              {userClasses.map(cls => {
                const requiredSupplies = getSuppliesByIds(cls.requiredSupplies);
                return (
                  <Link to={`/class/${cls.id}`} key={cls.id} className="class-card">
                    <div className="class-header">
                      <h4>{cls.name}</h4>
                      <span className="class-room">Room {cls.room}</span>
                    </div>
                    <div className="class-info">
                      <p className="class-teacher">
                        {currentUser.role === 'teacher' ? 'You teach this class' : `Teacher: ${cls.teacher}`}
                      </p>
                      <p className="class-subject">{cls.subject} • Grade {cls.grade}</p>
                    </div>
                    <div className="class-supplies">
                      <span className="supplies-count">
                        {requiredSupplies.length} supplies needed
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="no-classes">
              <p>No classes found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
