import React from 'react';
import './RegionFilter.css';

const RegionFilter = ({ onRegionChange, regionFilter }) => {
  const handleRegionChange = (e) => {
    const selectedRegion = e.target.value;
    onRegionChange(selectedRegion);
  };

  return (
    <div className="region-filter">
      <label htmlFor="region">Filter by Region:</label>
      <select id="region" onChange={handleRegionChange} value={regionFilter}>
        <option value="">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default RegionFilter;
