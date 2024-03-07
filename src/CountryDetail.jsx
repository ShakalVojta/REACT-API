import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./CountryDetail.css"; 

const CountryDetail = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${countryId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCountry(data);
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };

    fetchData();
  }, [countryId]);

  if (!country) {
    return <p>Loading...</p>;
  }
  const renderBorders = () => {
    if (country[0].borders && country[0].borders.length > 0) {
      return <p>Border Countries: {country[0].borders.join(", ")}</p>;
    } else {
      return <p>No border countries</p>;
    }
  };

  return (
    <div className="country-detail"> 
      <h2>{country.name?.common}</h2>
      <img
        src={country[0].flags?.png}
        alt={`Flag of ${country.name?.common}`}
      />
      <p>Population: {country[0].population}</p>
      <p>Region: {country[0].region}</p>
      <p>Subregion: {country[0].subregion}</p>
      <p>Capital: {country[0].capital}</p>
      <p>Currencies: {Object.values(country[0].currencies).map((e) => e.name)}</p>
      {renderBorders()} 
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default CountryDetail;
