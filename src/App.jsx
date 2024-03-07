import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Countries from './Countries';
import SearchBar from './SearchBar';
import CountryDetail from './CountryDetail';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country/:countryId" element={<CountryDetail />} />
      </Routes>
    </div>
  );
};

export default App;