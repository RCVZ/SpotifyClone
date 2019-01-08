import React, { PureComponent } from 'react';
import './Library.css';

import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';
import Grid from '../../Components/Grid/Grid';

import SpotifyApi from './../../util/Spotify';


// can be made cleaner 

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

  setNewPlaylist = (playlists) => {
    console.log('set',playlists)
    if (this.state.istrackList === true) {
      this.props.addToCurrentPlaylist(playlists)
    } else {
      this.setState({ playlists: playlists, istrackList: true });
    }
  }


  render() {
    const { playlists } = this.state;
    //const { addToCurrentPlaylist } = this.props;
    return (
      <Grid>
        <PlaylistDisplay
          playlists={playlists}
          addToCurrentPlaylist={this.setNewPlaylist}
          libary
        />
      </Grid>
    );
  }
}

export default Library;
