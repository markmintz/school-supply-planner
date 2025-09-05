import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getClassById, getSuppliesByIds } from '../data/mockData';

const ClassDetail = () => {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const classData = getClassById(parseInt(id));

  if (!classData) {
    return (
      <div className="class-detail">
        <div className="error-message">
          <h2>Class Not Found</h2>
          <p>The class you're looking for doesn't exist.</p>
          <Link to="/" className="back-link">← Back to Dashboard</Link>
        </div>
      </div>
    );
  }

  const requiredSupplies = getSuppliesByIds(classData.requiredSupplies);
  
  const groupSuppliesByCategory = (supplies) => {
    const grouped = {};
    supplies.forEach(supply => {
      if (!grouped[supply.category]) {
        grouped[supply.category] = [];
      }
      grouped[supply.category].push(supply);
    });
    return grouped;
  };

  const groupedSupplies = groupSuppliesByCategory(requiredSupplies);

  return (
    <div className="class-detail">
      <div className="class-detail-header">
        <Link to="/" className="back-link">← Back to Dashboard</Link>
        <div className="class-info">
          <h1>{classData.name}</h1>
          <div className="class-meta">
            <span className="class-teacher">
              {currentUser.role === 'teacher' && currentUser.classIds.includes(classData.id) 
                ? 'You teach this class' 
                : `Teacher: ${classData.teacher}`}
            </span>
            <span className="class-room">Room {classData.room}</span>
            <span className="class-subject">{classData.subject}</span>
            <span className="class-grade">Grade {classData.grade}</span>
          </div>
        </div>
      </div>

      <div className="supplies-section">
        <h2>Required Supplies</h2>
        <p className="supplies-description">
          {currentUser.role === 'teacher' 
            ? 'These are the supplies your students will need for this class.'
            : currentUser.role === 'student'
            ? 'Make sure you have these supplies for this class.'
            : 'Your child will need these supplies for this class.'}
        </p>

        {Object.keys(groupedSupplies).length > 0 ? (
          <div className="supplies-by-category">
            {Object.entries(groupedSupplies).map(([category, supplies]) => (
              <div key={category} className="supply-category">
                <h3>{category}</h3>
                <div className="supplies-list">
                  {supplies.map(supply => (
                    <div key={supply.id} className="supply-item">
                      <span className="supply-name">{supply.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-supplies">
            <p>No specific supplies required for this class.</p>
          </div>
        )}

        <div className="supply-actions">
          <button className="print-list-btn" onClick={() => window.print()}>
            🖨️ Print Supply List
          </button>
          <Link to="/supplies" className="view-all-btn">
            View All My Supplies
          </Link>
        </div>
      </div>

      {currentUser.role === 'teacher' && (
        <div className="teacher-notes">
          <h3>Teacher Notes</h3>
          <div className="notes-content">
            <p>
              As the teacher for this class, you can help parents and students by:
            </p>
            <ul>
              <li>Providing specific brand recommendations if needed</li>
              <li>Indicating which supplies are most critical early in the year</li>
              <li>Suggesting where supplies can typically be purchased locally</li>
              <li>Setting up a class supply sharing system for expensive items</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassDetail;
