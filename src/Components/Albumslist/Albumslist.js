import React from 'react';
import './Albumslist.css';

import PlaylistDisplay from '../../Containers/PlaylistDisplay/PlaylistDisplay';

const Albumslist = ({ albums, addToCurrentPlaylist })  => {
  return(
    <div className="Albumslist" >
      <PlaylistDisplay addToCurrentPlaylist={addToCurrentPlaylist} playlists={albums} albums />
    </div>
  );
}

export default Albumslist;