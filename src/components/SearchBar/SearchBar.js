import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <input placeholder="Type a song you want to hear." />
      <button className="SearchButton">Search</button>
    </div>
  );
}

export default SearchBar;
