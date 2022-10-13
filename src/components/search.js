import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const axios = require("axios");

const options = {
  method: 'GET',
 
  headers: {
    'X-RapidAPI-Key': 'a884b89998msh4721387d2a40595p140e3bjsna9226a555ce0',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

  const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
  const loadOptions = (inputValue) => {
    return   fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.name} ${city.name}`,
              label: `${city.name}, ${city.countryCode}`,

            };
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
   
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;