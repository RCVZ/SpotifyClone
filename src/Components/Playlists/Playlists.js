import React from 'react';
import './Playlists.css';

import PlaylistDisplay from '../../Containers/PlaylistDisplay/PlaylistDisplay';

const Playlists = ({ playlists, addToCurrentPlaylist }) => {
  return (
    <div className="Playlists" >
      <PlaylistDisplay addToCurrentPlaylist={addToCurrentPlaylist} playlists={playlists} albums />
    </div>
  );
}

export default Playlists;