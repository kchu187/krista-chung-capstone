import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.yelp.com/v3/businesses/search?location=calgary&term=${searchTerm}&sort_by=best_match&limit=20`,
        {
          mode: "no-cors",
          headers: {
            Authorization:
              "ljQe5jwVEr05efrSFfcKgcvBnwgUP2XSRyNnx8Yjpdap7kApeRefiHAeKOx_3ObKiZQtLRwTYDt3YvPGUxv_tNkdaWhI4fReG3Pko9Q4-ZVG-GLpCm_jdOXi0t0UZnYx",
            accept: "application/json",
          },
        }
      );
      const data = await response.json();
      onSearch(data.name);
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
