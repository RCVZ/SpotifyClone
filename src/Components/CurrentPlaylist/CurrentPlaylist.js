import React, { PureComponent } from 'react';
import './CurrentPlaylist.css';

import TrackList from '../TrackList/TrackList';

class CurrentPlaylist extends PureComponent {
  render() {
    return (
        <TrackList tracklist={[]} />    
    );
  }
}

export default CurrentPlaylist;