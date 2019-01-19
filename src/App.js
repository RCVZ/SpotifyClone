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
  componentDidMount() {
    SpotifyApi.getAccesToken();
  }

  render() {
    return (
      <div className="App">
        <SearchBar 
          history={this.props.history} //temp  <----    workaround
          location={this.props.location} //temp <----  
        />
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