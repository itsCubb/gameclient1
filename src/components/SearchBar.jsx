// SearchBar.jsx
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css'; // Import the CSS for SearchBar

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <SearchIcon className="search-icon" />
      <input type="text" placeholder="Search" className="search-input" />
    </div>
  );
};

export default SearchBar;