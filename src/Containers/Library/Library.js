import React, { PureComponent } from 'react';
import './Library.css';

import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';
import Grid from '../../Components/Grid/Grid';

import { ContextStore } from '../../Context/MainContext';

import SpotifyApi from './../../util/Spotify';

class Library extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
      istrackList: false,
      results: 6
    }
  }

  static contextType = ContextStore;

  componentWillMount() {
    SpotifyApi.browserSpotify().then((playlists) => {
      this.setState({ playlists: playlists });
    })
  }

  traverse = (playlists) => {
    if (this.state.istrackList === true) {
      this.props.addToCurrentPlaylist(playlists)
    } else {
      this.setState({ playlists: playlists, istrackList: true });
    }
  }

  getPlaylistTracks = (key, playlist) => {
    const newPlaylist = [];
    return SpotifyApi.getPlaylist(key, 'spotify').then((playlists) => {
      playlists.map((playlist) => {
        return newPlaylist.push(playlist.track);
      })
      return newPlaylist;
    });
  }

  getCategoriePlaylists = (playlist) => {
    SpotifyApi.getCategoriePlaylist(playlist.id).then((playlists) => {
      this.setState({ playlists: playlists, istrackList: true });
    });
  }

  openTracks = (key, playlist) => {
    if (playlist.type === undefined) {
      return this.getCategoriePlaylists(playlist)
    }
    this.getPlaylistTracks(key, playlist).then((newPlaylist) => {
      this.context.updateState('tracks', newPlaylist);
      this.props.history.push('/search/tracks')
    });
  } 

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


  render() {
    const { playlists, istrackList } = this.state;
    return (
      <Grid>
        <PlaylistDisplay
          playlists={playlists}
          history={this.props.history}
          istrackList={istrackList}
          addToCurrentPlaylist={this.addToCurrentPlaylist}
          addToNewPlaylist={this.addToNewPlaylist}
          openTracks={this.openTracks}
        />
      </Grid>
    );
  }
}

export default Library;
