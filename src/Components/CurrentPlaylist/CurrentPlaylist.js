import React, { PureComponent } from 'react';
import './CurrentPlaylist.css';

import TrackList from '../TrackList/TrackList';

class CurrentPlaylist extends PureComponent {
  render() {
    const { playlist } = this.props;
    return (
        <TrackList trackList={playlist} />    
    );
  }
}

export default CurrentPlaylist;