import React, { PureComponent } from 'react';
import './CurrentPlaylist.css';

import TrackList from '../TrackList/TrackList';
import Grid from '../Grid/Grid';

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
      <Grid>
        <TrackList trackList={playlist} />
      </Grid>        
    );
  }
}

export default CurrentPlaylist;