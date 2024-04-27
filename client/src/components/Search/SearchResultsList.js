const SearchResultsList = ({ searchResults, onResultClick }) => {
  const handleResultClick = (result) => {
    onResultClick(result);
  };
  return (
    <section className="search-list">
      {searchResults.map((result) => (
        <div
          key={result.id}
          className="search-list__item"
          onClick={() => handleResultClick(result)}
        >
          <h2> {result.name}</h2>
          <p> {result.location.address}</p>
        </div>
      ))}
    </section>
  );
};

export default SearchResultsList;
