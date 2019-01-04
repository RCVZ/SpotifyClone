import React from 'react';
import './PlaylistDisplay.css';

import Card from '../../Components/Card/Card';


const PlaylistDisplay = ({ playlists, handleOnClick }) => {
  return (
    <div className="PlaylistDisplay">
      {playlists.map(playlist => {
        return (
          <Card
            playlist={playlist}
            id={playlist.id}
            key={playlist.id}
            handleOnclick={handleOnClick}
          />)
      })}
    </div>
  );
}

export default PlaylistDisplay;
