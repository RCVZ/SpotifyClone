import React, { PureComponent } from 'react';
import './UserPlaylists.css';

import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';
import ResultContainer from '../ResultContainer/ResultContainer';

import SpotifyApi from './../../util/Spotify';

class UserPlaylists extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      playlists: []
    }
  }
  
  render() {
    const { playlist } = this.props;
    return (
      <ResultContainer>
        <PlaylistDisplay playlists={playlists} />
      </ResultContainer>
    );
  }
}

export default Playlists;