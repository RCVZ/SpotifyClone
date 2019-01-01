import React, { PureComponent } from 'react';
import './UserPlaylists.css';

import PlaylistDisplay from '../../Containers/PlaylistDisplay/PlaylistDisplay';
import Grid from '../../Components/Grid/Grid';

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
      <Grid>
        <PlaylistDisplay 
          playlists={userPlaylists} 
          addToCurrentPlaylist={addToCurrentPlaylist}
        />
      </Grid>
    );
  }
}

export default UserPlaylists;