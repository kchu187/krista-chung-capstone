import { useState, useEffect } from "react";
import "./HomePage.scss";
import BeanMap from "../../components/BeanMap/BeanMap";
import SearchBar from "../../components/Search/SearchBar";
import SearchResultsList from "../../components/Search/SearchResultsList";
import BeanList from "../../components/BeanList/BeanList";
import EditBeanForm from "../../components/BeanForm/EditBeanForm";
import Header from "../../components/Header/Header";
import axios from "axios";
const HomePage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [selectedBean, setSelectedBean] = useState(null);
  const [showEditBeanForm, setShowEditBeanForm] = useState(false);
  const [refreshBeanList, setRefreshBeanList] = useState(false);
  const [beansData, setBeansData] = useState([]);

  //Fetch bean data to pass to beanmap, which will render markers based on fetched coordinates
  useEffect(() => {
    const fetchBeansData = async () => {
      try {
        const userID = sessionStorage.getItem("userID");
        const response = await axios.get(
          `http://localhost:8080/api/users/${userID}/beans`
        );
        setBeansData(response.data);
      } catch (error) {
        console.error("Error fetching beans data:", error);
      }
    };
    fetchBeansData();
  }, [refreshBeanList]);

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
    setShowEditBeanForm(true);
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
      <Header></Header>
      <SearchBar onSearch={handleSearch} />
      <SearchResultsList
        searchResults={searchResults}
        onResultClick={handleResultClick}
      />
      <div className="beanmap-container">
        <BeanMap
          selectedResult={selectedResult}
          selectedBean={selectedBean}
          onBeanAdded={handleRefreshBeanList}
          beansData={beansData}
        />
        <BeanList onBeanClick={handleBeanClick} refresh={refreshBeanList} />
        {showEditBeanForm && selectedBean && (
          <EditBeanForm
            bean={selectedBean}
            onSubmit={handleEditFormSubmit}
            onClose={() => setShowEditBeanForm(false)}
          />
        )}
      </div>
    </>
  );
};

export default HomePage;
