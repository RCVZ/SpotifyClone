import React from 'react';
import './PlaylistDisplay.css';

import Card from '../../Components/Card/Card';

const PlaylistDisplay = ({ playlists, openTracks, addToNewPlaylist, addToCurrentPlaylist }) => {
  return (
    <div className="PlaylistDisplay">
      {playlists.map(playlist => {
        return (
          <Card
            addToCurrentPlaylist={addToCurrentPlaylist}
            addToNewPlaylist={addToNewPlaylist}
            playlist={playlist}
            id={playlist.id}
            key={playlist.id}
            openTracks={openTracks}
          />)
      })}
    </div>
  );
}

export default PlaylistDisplay;
