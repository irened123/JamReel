import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

const SearchResults = ({tracks, onAdd}) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <Tracklist tracks={tracks} onAdd={onAdd} isRemoval={false}/>
    </div>
  );
}

export default SearchResults;
