import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';

const Playlist = ({ playlistName, playlistTracks, setPlaylistName, onRemove }) => {
  const handleNameChange = event => {
    setPlaylistName(event.target.value);
  };

  return (
    <div className="Playlist">
      <input defaultValue={playlistName} onChange={handleNameChange}/>
      <Tracklist tracks={playlistTracks} onRemove={onRemove} isRemoval={true}/>
      <button className="Playlist-save">Save to Spotify</button>
    </div>
  );
}

export default Playlist;
