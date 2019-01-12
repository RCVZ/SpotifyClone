import React, { PureComponent } from 'react';

import './App.css';

import SearchBar from './Containers/SearchBar/SearchBar';
import Navbar from './Components/Navbar/Navbar';
import NewPlaylist from './Containers/NewPlaylist/NewPlaylist';
import CurrentPlaylist from './Components/CurrentPlaylist/CurrentPlaylist';
import Main from './Containers/Main/Main';
import Player from './Containers/Player/Player';
import Library from './Containers/Library/Library';
import UserPlaylists from './Containers/UserPlaylists/UserPlaylists';
import SpotifyApi from './util/Spotify';

import { withRouter } from "react-router-dom";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.scrollHeight = 200;
    this.offset = 50;
  }

  componentDidMount() {
    SpotifyApi.getAccesToken();
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <Navbar />
        <Main
          history={this.props.history} //temp  <----    workaround
          location={this.props.location} //temp <----  
        >
          <CurrentPlaylist />
          <NewPlaylist />
          <Library />
          <UserPlaylists />
        </Main>
        <Player />
      </div>
    );
  }
}

export default withRouter(App);