import React, { PureComponent } from 'react';
import './Albums.css';

import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';

class Albums extends PureComponent {

  render() {
    const { results, addToCurrentPlaylist } = this.props;
    return (
      <div className="Albums" >
        <PlaylistDisplay addToCurrentPlaylist={addToCurrentPlaylist} playlists={results.albums} albums />
      </div>
    );
  }
}



export default Albums;