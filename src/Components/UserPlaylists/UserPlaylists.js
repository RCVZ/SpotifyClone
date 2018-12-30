import React, { PureComponent } from 'react';
import './UserPlaylists.css';

import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';
import ResultContainer from '../ResultContainer/ResultContainer';

import SpotifyApi from './../../util/Spotify';

class UserPlaylists extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userPlaylists: []
    }
  }

  componentWillMount() {
    SpotifyApi.getPlaylist().then((playlists) => {
      this.setState({ userPlaylists: playlists });
    })
  }
  
  render() {
    const { userPlaylists } = this.state;
    const { addToCurrentPlaylist } = this.props; 
    return (
      <ResultContainer>
        <PlaylistDisplay 
          playlists={userPlaylists} 
          addToCurrentPlaylist={addToCurrentPlaylist}
        />
      </ResultContainer>
    );
  }
}

export default UserPlaylists;