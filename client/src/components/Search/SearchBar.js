import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a restaurant..."
        value={searchTerm}
        onChange={handleChange}
      />

      <button type="submit" disabled={loading}>
        {" "}
        {loading ? "Searching..." : "Search"}{" "}
      </button>
    </form>
  );
}
export default SearchBar;
