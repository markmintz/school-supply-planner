import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getAllSuppliesForUser, getUserClasses, getSuppliesByIds, getUserById } from '../data/mockData';

const SupplyList = () => {
  const { currentUser } = useAuth();
  const allSupplies = getAllSuppliesForUser(currentUser);
  const userClasses = getUserClasses(currentUser);
  
  // For teachers, add candy supplies to their supply list
  const teacherSupplies = currentUser.role === 'teacher' 
    ? [...allSupplies, { id: 22, name: 'Bag of Twizzlers', category: 'Candy' }, { id: 23, name: 'Assorted Candy', category: 'Candy' }]
    : allSupplies;
  
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('category');
  const [checkedSupplies, setCheckedSupplies] = useState(new Set());

  // Get unique categories
  const categories = [...new Set(teacherSupplies.map(supply => supply.category))];

  // Filter supplies
  const filteredSupplies = filterCategory === 'all' 
    ? teacherSupplies 
    : teacherSupplies.filter(supply => supply.category === filterCategory);

  // Sort supplies
  const sortedSupplies = [...filteredSupplies].sort((a, b) => {
    if (sortBy === 'category') {
      return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
    } else if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  // Group supplies by category for display
  const groupedSupplies = {};
  sortedSupplies.forEach(supply => {
    if (!groupedSupplies[supply.category]) {
      groupedSupplies[supply.category] = [];
    }
    groupedSupplies[supply.category].push(supply);
  });

  // Get which classes need each supply
  const getClassesForSupply = (supplyId) => {
    return userClasses.filter(cls => cls.requiredSupplies.includes(supplyId));
  };

  const handleSupplyCheck = (supplyId) => {
    const newCheckedSupplies = new Set(checkedSupplies);
    if (newCheckedSupplies.has(supplyId)) {
      newCheckedSupplies.delete(supplyId);
    } else {
      newCheckedSupplies.add(supplyId);
    }
    setCheckedSupplies(newCheckedSupplies);
  };

  const getChildrenInfo = () => {
    if (currentUser.role === 'parent') {
      return currentUser.childrenIds.map(id => getUserById(id)).filter(Boolean);
    }
    return [];
  };

  const children = getChildrenInfo();

  return (
    <div className="supply-list">
      <div className="supply-list-header">
        <Link to="/" className="back-link">← Back to Dashboard</Link>
        <div className="header-content">
          <h1>Complete Supply List</h1>
          <p className="header-description">
            {currentUser.role === 'teacher' 
              ? 'All supplies needed for your classes (including teacher candy supplies)'
              : currentUser.role === 'student'
              ? 'All supplies you need for your classes'
              : `All supplies needed for ${children.map(c => c.name).join(' and ')}'s classes`}
          </p>
        </div>
      </div>

      <div className="supply-controls">
        <div className="filters">
          <label htmlFor="category-filter">Filter by Category:</label>
          <select 
            id="category-filter"
            value={filterCategory} 
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="all">All Categories ({teacherSupplies.length})</option>
            {categories.map(category => {
              const count = teacherSupplies.filter(s => s.category === category).length;
              return (
                <option key={category} value={category}>
                  {category} ({count})
                </option>
              );
            })}
          </select>
        </div>

        <div className="sort">
          <label htmlFor="sort-by">Sort by:</label>
          <select 
            id="sort-by"
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="category">Category</option>
            <option value="name">Name</option>
          </select>
        </div>

        <div className="progress">
          <span className="progress-text">
            {checkedSupplies.size} of {filteredSupplies.length} items checked
          </span>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ 
                width: filteredSupplies.length > 0 
                  ? `${(checkedSupplies.size / filteredSupplies.length) * 100}%` 
                  : '0%' 
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="supplies-content">
        {Object.keys(groupedSupplies).length > 0 ? (
          Object.entries(groupedSupplies).map(([category, supplies]) => (
            <div key={category} className="supply-category-section">
              <h2 className="category-title">{category}</h2>
              <div className="supplies-grid">
                {supplies.map(supply => {
                  const relatedClasses = getClassesForSupply(supply.id);
                  const isChecked = checkedSupplies.has(supply.id);
                  
                  return (
                    <div 
                      key={supply.id} 
                      className={`supply-card ${isChecked ? 'checked' : ''}`}
                    >
                      <div className="supply-main">
                        <label className="supply-checkbox">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleSupplyCheck(supply.id)}
                          />
                          <span className="checkmark"></span>
                        </label>
                        <div className="supply-info">
                          <h3 className="supply-name">{supply.name}</h3>
                          <span className="supply-category-tag">{supply.category}</span>
                        </div>
                      </div>
                      
                      {supply.category !== 'Candy' && (
                        <div className="supply-classes">
                          <span className="classes-label">Needed for:</span>
                          <div className="class-list">
                            {relatedClasses.map(cls => (
                              <Link 
                                key={cls.id} 
                                to={`/class/${cls.id}`} 
                                className="class-link"
                              >
                                {cls.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                      {supply.category === 'Candy' && (
                        <div className="supply-classes">
                          <span className="classes-label">Teacher Supply</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        ) : (
          <div className="no-supplies">
            <h3>No supplies found</h3>
            <p>
              {filterCategory === 'all' 
                ? 'No supplies are needed for your classes.' 
                : `No supplies found in the ${filterCategory} category.`}
            </p>
          </div>
        )}
      </div>

      <div className="supply-actions">
        <button 
          className="print-list-btn" 
          onClick={() => window.print()}
        >
          🖨️ Print Shopping List
        </button>
        <button 
          className="clear-checked-btn"
          onClick={() => setCheckedSupplies(new Set())}
          disabled={checkedSupplies.size === 0}
        >
          Clear Checked Items
        </button>
      </div>
    </div>
  );
};

export default SupplyList;
