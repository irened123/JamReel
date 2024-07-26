import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="SearchBar">
      <input placeholder="Type a song you want to hear." onChange={e => setSearchTerm(e.target.value)}/>
      <button className="SearchButton" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
