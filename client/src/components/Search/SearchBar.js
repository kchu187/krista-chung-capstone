import React, { useState } from "react";
import searchIcon from "../../assets/images/search-icon.png";
import "./SearchBar.scss";
function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:8080/api/yelp/search?term=${searchTerm}&location=calgary`,
        {
          headers: {
            Authorization:
              "ljQe5jwVEr05efrSFfcKgcvBnwgUP2XSRyNnx8Yjpdap7kApeRefiHAeKOx_3ObKiZQtLRwTYDt3YvPGUxv_tNkdaWhI4fReG3Pko9Q4-ZVG-GLpCm_jdOXi0t0UZnYx",
          },
        }
      );

      const data = await response.json();
      setSearchResults(data.businesses);
      onSearch(data.businesses);
    } catch (error) {
      console.error("Error fetching data from the Yelp API", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="search__container" onSubmit={handleSubmit}>
      <div className="search__sub-container">
        <img src={searchIcon} className="search__icon" alt="magnifying glass" />
        <input
          className="search__input"
          type="text"
          placeholder="Search for a restaurant..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <button className="search__button" type="submit" disabled={loading}>
        {" "}
        {loading ? "Searching..." : "Search"}{" "}
      </button>
    </form>
  );
}
export default SearchBar;
