import React, { PureComponent } from 'react';
import './UserPlaylists.css';

import PlaylistDisplay from '../../Containers/PlaylistDisplay/PlaylistDisplay';
import Grid from '../../Components/Grid/Grid';
import { ContextStore } from '../../Context/MainContext';

import SpotifyApi from './../../util/Spotify';

class UserPlaylists extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userPlaylists: []
    }
  }
  
  static contextType = ContextStore;

  componentWillMount() {
    SpotifyApi.getPlaylist().then((playlists) => {
      this.setState({ userPlaylists: playlists });
    })
  }

  handleOnAdd = (key, playlist) => {
    let newPlaylist = [];

    SpotifyApi.getPlaylist(key, 'spotify').then((playlists) => {
      playlists.map((playlist) => {
        return newPlaylist.push(playlist.track);
      })
      this.context.addToNewPlaylist(newPlaylist, 'tracklist')
    });

  }
  
  render() {
    const { userPlaylists } = this.state;
    const { addToCurrentPlaylist, history } = this.props; 
    return (
      <Grid>
        <PlaylistDisplay 
          playlists={userPlaylists} 
          addToCurrentPlaylist={addToCurrentPlaylist}
          handleOnAdd={this.handleOnAdd}
          history={history}
          istrackList
        />
      </Grid>
    );
  }
}

export default UserPlaylists;