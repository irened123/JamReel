import React from 'react';
import './Track.css';

const Track = ({ track }) => {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>by {track.artist} * from {track.album}</p>
      </div>
      <button className="Track-action">Add to Playlist</button>
    </div>
  );
}

export default Track;
