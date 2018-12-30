import React, { PureComponent } from 'react';
import './Library.css';

import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';
import ResultContainer from '../ResultContainer/ResultContainer';

import SpotifyApi from './../../util/Spotify';

class Library extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
      results: 6
    }
  }

  componentWillMount() {
    SpotifyApi.browserSpotify().then((playlists) => {
      this.setState({ playlists: playlists });
    })
  }

  render() {
    const { playlists } = this.state;
    const { addToCurrentPlaylist } = this.props; 
    return (
      <ResultContainer>
        <PlaylistDisplay 
          playlists={playlists} 
          addToCurrentPlaylist={addToCurrentPlaylist}
        />
      </ResultContainer>
    );
  }
}

export default Library;