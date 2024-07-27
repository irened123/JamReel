import React, { useState, useCallback } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import "./App.css";
import Spotify from "../../util/Spotify";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");

  const search = useCallback(term => {
    Spotify.search(term).then(results => {
      setSearchResults(results);
    });
  }, []);

  const addTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) => {
      if (!prevTracks.find((existingTrack) => existingTrack.id === track.id)) {
        return [...prevTracks, track];
      }
      return prevTracks;
    });
  
    setSearchResults((prevResults) => {
      return prevResults.filter((result) => result.id !== track.id);
    });
  }, []);

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) => {
      return prevTracks.filter((existingTrack) => existingTrack.id !== track.id);
    });

    setSearchResults((prevResults) => {
      return [track, ...prevResults];
    });
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
      <header className="App-header">
        <h1 className="App-title">JamReel</h1>
      </header>
      <SearchBar onSearch={search}/>
      <div className="App-playlist">
        <SearchResults tracks={searchResults} onAdd={addTrack} />
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
