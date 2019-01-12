import React, { PureComponent } from 'react';
import './Library.css';

import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';
import Grid from '../../Components/Grid/Grid';

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


  render() {
    const { playlists } = this.state;
    return (
      <Grid>
        <PlaylistDisplay
          playlists={playlists}
          traverse={this.traverse}
          libary
        />
      </Grid>
    );
  }
}

export default Library;
