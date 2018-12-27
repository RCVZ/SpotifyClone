import React, { PureComponent } from 'react';
import './CurrentPlaylist.css';

import TrackList from '../TrackList/TrackList';
import ResultContainer from '../ResultContainer/ResultContainer';

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
      <ResultContainer>
        <TrackList trackList={playlist} />
      </ResultContainer>        
    );
  }
}

export default CurrentPlaylist;