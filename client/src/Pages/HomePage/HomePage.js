import { useState, useEffect } from "react";

import BeanMap from "../../components/BeanMap/BeanMap";
import SearchBar from "../../components/Search/SearchBar";
import SearchResultsList from "../../components/Search/SearchResultsList";
import BeanList from "../../components/BeanList/BeanList";
import EditBeanForm from "../../components/BeanForm/EditBeanForm";
const HomePage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [selectedBean, setSelectedBean] = useState(null);
  const [showEditBeanForm, setShowEditBeanForm] = useState(false);
  const [refreshBeanList, setRefreshBeanList] = useState(false);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  const handleResultClick = (result) => {
    setSelectedResult(result);
    setSelectedBean(null); // Ensure beans clicked in beanlist are disabled when search result is clicked
  };

  const handleBeanClick = (bean) => {
    setShowEditBeanForm(true);
    setSelectedBean(bean);
    console.log(bean);
    setSelectedResult(null);
  };
  const handleEditFormSubmit = (formData) => {
    console.log("Form edited with data:", formData);
    setShowEditBeanForm(false); // Hide the form after submission
  };

  const handleRefreshBeanList = () => {
    setRefreshBeanList(!refreshBeanList);
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <SearchResultsList
        searchResults={searchResults}
        onResultClick={handleResultClick}
      />
      <BeanMap
        selectedResult={selectedResult}
        selectedBean={selectedBean}
        onBeanAdded={handleRefreshBeanList}
      />
      <BeanList onBeanClick={handleBeanClick} refresh={refreshBeanList} />
      {showEditBeanForm && selectedBean && (
        <EditBeanForm
          bean={selectedBean}
          onSubmit={handleEditFormSubmit}
          onClose={() => setShowEditBeanForm(false)}
        />
      )}
    </>
  );
};

export default HomePage;
