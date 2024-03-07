import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';



const SearchBar = ({ onSearch, handleRegionChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleReset = () => {
    setSearchTerm('')
    handleRegionChange('');
    onSearch('');
  }
  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleInputChange}
        
      />
      <button onClick={handleSearch} >Search</button>
      <button onClick={ handleReset}>Reset</button>
      
    </div>
  );
};

export default SearchBar;
