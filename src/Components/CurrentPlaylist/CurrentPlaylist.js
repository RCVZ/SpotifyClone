import React, { PureComponent } from 'react';
import './CurrentPlaylist.css';

import TrackList from '../TrackList/TrackList';

class CurrentPlaylist extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    }
  }
  render() {
    const { playlist } = this.props;
    return (
      <div className="CurrentPlaylist">
        <div className="Title">
          <h3>Current-Playlist</h3>
        </div>        
        <TrackList trackList={playlist} />
      </div>
    );
  }
}

export default CurrentPlaylist;