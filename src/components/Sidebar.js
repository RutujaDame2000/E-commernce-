import React from 'react';
import '../pages/sidebar.css';

const Sidebar = () => {
  const handleClearAll = () => {
    // Logic to clear all the filters (You can reset the state if using state management)
    console.log("Clear all filters");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3 className="sidebar-title">Filters</h3>
        <button className="clear-all" onClick={handleClearAll}>Clear All</button>
      </div>

      <div className="filter-group">
        <h4>Category</h4>
        <label><input type="checkbox" /> T-Shirts</label>
        <label><input type="checkbox" /> Shirts</label>
        <label><input type="checkbox" /> Pants</label>
      </div>

      <div className="filter-group">
        <h4>Brand</h4>
        <label><input type="checkbox" /> H&M</label>
        <label><input type="checkbox" /> Roadster</label>
        <label><input type="checkbox" /> Levi's</label>
      </div>

      <div className="filter-group">
        <h4>Color</h4>
        <label><input type="checkbox" /> Black</label>
        <label><input type="checkbox" /> White</label>
        <label><input type="checkbox" /> Blue</label>
      </div>

      <div className="filter-group">
        <h4>Price Range</h4>
        <input type="range" min="100" max="5000" step="100" />
      </div>

      <div className="filter-group">
        <h4>Discount</h4>
        <label><input type="checkbox" /> 10% or more</label>
        <label><input type="checkbox" /> 30% or more</label>
        <label><input type="checkbox" /> 50% or more</label>
        <label><input type="checkbox" /> 70% or more</label>
      </div>
    </aside>
  );
};

export default Sidebar;
