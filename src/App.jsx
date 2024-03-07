import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Countries from './Countries';
import SearchBar from './SearchBar';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/search" element={<SearchBar />} />
      </Routes>
    </div>
  );
};

export default App;