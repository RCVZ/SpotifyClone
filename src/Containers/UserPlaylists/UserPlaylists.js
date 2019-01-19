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

  getPlaylistTracks = (key, playlist) => {
    const newPlaylist = [];
    return (
      SpotifyApi.getPlaylist(key, 'spotify')
        .then((playlist) => {
          playlist.map((playlist) => {
            return newPlaylist.push(playlist.track)
          })
          return newPlaylist
        }));
  };

  addToNewPlaylist = (key, playlist) => {
    this.getPlaylistTracks(key, playlist).then((newPlaylist) => {
      this.context.addToNewPlaylist(newPlaylist, 'tracklist')
    });
  }

  addToCurrentPlaylist = (key, playlist) => {
    this.getPlaylistTracks(key, playlist).then((newPlaylist) => {
      this.context.addToCurrentPlaylist(newPlaylist, 'tracklist')
    });
  }

  openTracks = (key, playlist) => {
    this.getPlaylistTracks(key, playlist).then((newPlaylist) => {
      this.context.updateState('tracks', newPlaylist);
      this.props.history.push('/search/tracks')
    });
  }
  
  render() {
    const { userPlaylists } = this.state; 
    return (
      <Grid>
        <PlaylistDisplay 
          playlists={userPlaylists} 
          addToCurrentPlaylist={this.addToCurrentPlaylist}
          addToNewPlaylist={this.addToNewPlaylist}
          openTracks={this.openTracks}
        />
      </Grid>
    );
  }
}

export default UserPlaylists;