import React, { } from 'react';
import './Playlists.css';

import PlaylistDisplay from '../../Containers/PlaylistDisplay/PlaylistDisplay';
import Header from '../Header/Header';

const Playlists = ({ playlists, addToCurrentPlaylist, buttonAction, state }) => {
  return (
    <div className="Playlists" >
      <Header state={state} buttonAction={buttonAction}>Playlists</Header>
      <PlaylistDisplay addToCurrentPlaylist={addToCurrentPlaylist} playlists={playlists} albums />
    </div>
  );
}

export default Playlists;