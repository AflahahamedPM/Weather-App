import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../api";


const Search = ({ onSearchChange }) => {
  const [searchText, setSearchText] = useState(null);

  const loadOptions = (searchInput) => {
    try {
      return fetch(
        `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${searchInput}`,
        geoApiOptions
      )
        .then((response) => response.json())
        .then((response) => {
          return {
            options: response.data.map((city) => {
              return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
              };
            }),
          };
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnChange = (searchData) => {
    setSearchText(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={searchText}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      className="w-6/12 mx-auto bg-gradient-to-l from-white to-blue-400"
    />
  );
};

export default Search;
