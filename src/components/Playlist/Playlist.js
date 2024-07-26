import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';

const Playlist = ({ playlistName, playlistTracks, setPlaylistName, onRemove, onSave }) => {
  const handleNameChange = event => {
    setPlaylistName(event.target.value);
  };

  return (
    <div className="Playlist">
      <input value={playlistName} onChange={handleNameChange}/>
      <Tracklist tracks={playlistTracks} onRemove={onRemove} isRemoval={true}/>
      <button className="Playlist-save" onClick={onSave}>Save to Spotify</button>
    </div>
  );
}

export default Playlist;
