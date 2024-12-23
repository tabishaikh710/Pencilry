import React from 'react';
import '../style/SearchBar.css'; // Add styles for the search bar

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
