import React, { useState, useCallback } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import "./App.css";
import Spotify from "../../util/Spotify";

const mockTracks = [
  {
    id: 1,
    name: "Welcome to New York",
    artist: "Taylor Swift",
    album: "1989",
    uri: "spotify:track:1",
  },
  {
    id: 2,
    name: "Clean",
    artist: "Taylor Swift",
    album: "1989",
    uri: "spotify:track:2",
  },
  {
    id: 3,
    name: "Out of the Woods",
    artist: "Taylor Swift",
    album: "1989",
    uri: "spotify:track:3",
  },
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
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((existingTrack) => existingTrack.id !== track.id)
    );
  }, []);

  const savePlaylist = useCallback(() => {
    const uris = playlistTracks.map((track) => track.uri);
    if (uris.length > 0) {
      Spotify.savePlaylist(playlistName, uris).then(() => {
        setPlaylistName("New Playlist");
        setPlaylistTracks([]);
      });
    } else {
      console.log("No tracks to save.");
    }
  }, [playlistName, playlistTracks]);

  return (
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults tracks={tracks} onAdd={addTrack} />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          setPlaylistName={setPlaylistName}
          onRemove={removeTrack}
          onSave={savePlaylist}
        />
      </div>
    </div>
  );
};

export default App;
