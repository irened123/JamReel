import React, { useState, useCallback } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import "./App.css";

const mockTracks = [
  { id: 1, name: "Welcome to New York", artist: "Taylor Swift", album: "1989" },
  { id: 2, name: "Clean", artist: "Taylor Swift", album: "1989" },
  { id: 3, name: "Out of the Woods", artist: "Taylor Swift", album: "1989" },
];

const App = () => {
  const [tracks, setTracks] = useState(mockTracks);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");

  // Adds a track to the playlist if not in the playlist
  const addTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) => {
      if (!prevTracks.find((existingTrack) => existingTrack.id === track.id)) {
        return [...prevTracks, track];
      }
      return prevTracks;
    });
  }, []);

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) => prevTracks.filter((existingTrack) => existingTrack.id !== track.id));
  }, []);

  return (
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults tracks={tracks} onAdd={addTrack}/>
        <Playlist playlistName={playlistName} playlistTracks={playlistTracks} setPlaylistName={setPlaylistName} onRemove={removeTrack}/>
      </div>
    </div>
  );
};

export default App;
