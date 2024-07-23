import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

const SearchResults = () => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <Tracklist />
    </div>
  );
}

export default SearchResults;
