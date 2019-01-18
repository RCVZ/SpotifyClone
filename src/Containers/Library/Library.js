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

  handleOnAdd = (key, playlist) => {
    const newPlaylist = [];
    if (playlist.type === undefined) {
      SpotifyApi.getCategoriePlaylist(playlist.id).then((playlist) => {
        this.traverse(playlist)
      });
    }  else {
      SpotifyApi.getPlaylist(key, 'spotify').then((playlists) => {
        playlists.map((playlist) => {
          return newPlaylist.push(playlist.track);
        })
        this.context.addToNewPlaylist(newPlaylist, 'tracklist')
      });
    }
  }


  render() {
    const { playlists, istrackList } = this.state;
    return (
      <Grid>
        <PlaylistDisplay
          playlists={playlists}
          traverse={this.traverse}
          history={this.props.history}
          istrackList={istrackList}
          handleOnAdd={this.handleOnAdd}
          libary
        />
      </Grid>
    );
  }
}

export default Library;
