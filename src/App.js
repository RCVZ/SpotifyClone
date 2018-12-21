import React, { PureComponent } from 'react';
import './App.css';

import SearchBar from './Components/SearchBar/SearchBar';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Player from './Components/Player/Player';

import SpotifyApi from './util/Spotify';

import { withRouter } from "react-router-dom";
import { hot } from 'react-hot-loader'

class App extends PureComponent {

  componentDidMount() {
    SpotifyApi.getAccesToken();
  } 

  render() {
    return (
      <div className="App">
        <SearchBar />
        <Navbar />
        <Main />
        <Player />
      </div>
    );
  }
}

export default hot(module)(withRouter(App));
