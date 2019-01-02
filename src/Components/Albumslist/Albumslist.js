import React from 'react';
import './Albumslist.css';

import PlaylistDisplay from '../../Containers/PlaylistDisplay/PlaylistDisplay';
import Header from '../Header/Header';

const Albumslist = ({ albums, addToCurrentPlaylist })  => {
  return(
    <div className="Albumslist" >
      <Header>Albums</Header>
      <PlaylistDisplay addToCurrentPlaylist={addToCurrentPlaylist} playlists={albums} albums />
    </div>
  );
}

export default Albumslist;