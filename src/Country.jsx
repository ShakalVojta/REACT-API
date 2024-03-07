import React from 'react';
import './Country.css';

const Country = ({ data }) => {
  return (
    <div className="country-card">
      <h2 className="country-heading">{data.name.common}</h2>
      <img className="country-flag" src={data.flags.png} alt={`Flag of ${data.name.common}`} />
      <div className="country-info">
        <p>Population: {data.population}</p>
        <p>Region: {data.region}</p>
        <p>Capital: {data.capital && data.capital[0]}</p>
      </div>
    </div>
  );
};

export default Country;
