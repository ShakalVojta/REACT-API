import React, { useEffect, useState } from 'react';
import Country from './Country';
import SearchBar from './SearchBar';
import RegionFilter from './RegionFilter';
import './Countries.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [regionFilter, setRegionFilter] = useState('');

  const loadData = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const handleRegionChange = (region) => {
    setRegionFilter(region);
  };

  const filteredByRegion =
    regionFilter === ''
      ? filteredCountries
      : filteredCountries.filter((country) => country.region === regionFilter);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="countries-container">
      <h1 className="countries-heading">All countries</h1>
      <SearchBar onSearch={handleSearch} handleRegionChange={handleRegionChange}/>
      <RegionFilter onRegionChange={handleRegionChange}regionFilter={regionFilter} />
      <div className="countries-list">
        {filteredByRegion.map((country) => (
          <Country key={country.cca3} data={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
