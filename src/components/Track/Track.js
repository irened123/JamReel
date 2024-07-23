import React from 'react';
import './Track.css';

const Track = () => {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>Welcome to New York</h3>
        <p>by Taylor Swift * from 1989</p>
      </div>
      <button className="Track-action">Add to Playlist</button>
    </div>
  );
}

export default Track;
