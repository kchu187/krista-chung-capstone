import { useState, useEffect } from "react";

import BeanMap from "../../components/BeanMap/BeanMap";
import SearchBar from "../../components/Search/SearchBar";
import SearchResultsList from "../../components/Search/SearchResultsList";

const HomePage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  const handleResultClick = (result) => {
    setSelectedResult(result);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <SearchResultsList
        searchResults={searchResults}
        onResultClick={handleResultClick}
      />
      <BeanMap selectedResult={selectedResult} />
    </>
  );
};

export default HomePage;
