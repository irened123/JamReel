import React from "react";
import Track from "../Track/Track";
import "./Tracklist.css";

const Tracklist = ({ tracks, onAdd, isRemoval, onRemove }) => {
  return (
    <div className="Tracklist">
      {tracks.map((track) => (
        <Track key={track.id} track={track} onAdd={onAdd} isRemoval={isRemoval} onRemove={onRemove}/>
      ))}
    </div>
  );
};

export default Tracklist;
