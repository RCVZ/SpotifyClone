import React, { PureComponent } from 'react';
import './Playlist.css';

import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';

class Playlist extends PureComponent {

  render() {
    const { results, addToCurrentPlaylist } = this.props;
    return (
      <div className="Playlist" >
        <PlaylistDisplay addToCurrentPlaylist={addToCurrentPlaylist} playlists={results.albums} albums />
      </div>
    );
  }
}



export default Playlist;