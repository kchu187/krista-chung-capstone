import { useState, useEffect } from "react";

import BeanMap from "../../components/BeanMap/BeanMap";
import SearchBar from "../../components/Search/SearchBar";
import SearchResultsList from "../../components/Search/SearchResultsList";
import BeanList from "../../components/BeanList/BeanList";
const HomePage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [selectedBean, setSelectedBean] = useState(null);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  const handleResultClick = (result) => {
    setSelectedResult(result);
    setSelectedBean(null); // Ensure beans clicked in beanlist are disabled when search result is clicked
  };

  const handleBeanClick = (bean) => {
    setSelectedBean(bean);
    setSelectedResult(null);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <SearchResultsList
        searchResults={searchResults}
        onResultClick={handleResultClick}
      />
      <BeanMap selectedResult={selectedResult} selectedBean={selectedBean} />
      <BeanList onBeanClick={handleBeanClick} />
    </>
  );
};

export default HomePage;
