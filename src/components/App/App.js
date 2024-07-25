import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

const mockTracks = [
  { id: 1, name: "Welcome to New York", artist: "Taylor Swift", album: "1989"},
  { id: 2, name: "Clean", artist: "Taylor Swift", album: "1989" },
  { id: 3, name: "Out of the Woods", artist: "Taylor Swift", album: "1989" }
];

const App = () => {
  const [tracks, setTracks] = useState(mockTracks);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');

  return (
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults tracks={tracks}/>
        <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
      </div>
    </div>
  );
}

export default App;
