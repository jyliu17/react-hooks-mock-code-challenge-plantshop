import React from "react";

function Search({plantSearch, setPlantSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={plantSearch}
        onChange={(e) => setPlantSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;