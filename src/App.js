import React, { PureComponent } from 'react';
import './App.css';
import './Components/Main/Main.css';

import SearchBar from './Components/SearchBar/SearchBar';
import Navbar from './Components/Navbar/Navbar';

import SearchResults from './Components/SearchResults/SearchResults';
import PlayList from './Components/PlayList/PlayList';

import Player from './Components/Player/Player';

import SpotifyApi from './util/Spotify';

import { Switch, Route, withRouter } from "react-router-dom";
import { hot } from 'react-hot-loader'

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: {
        playlist: [],
        artists: [],
        albums: [],
        tracks: []
      },
      newPlaylist: [],
      currentPlaylist: []
    }
  }

  componentDidMount() {
    SpotifyApi.getAccesToken();
  }
  
  searchSpotify = (searchTerm) => {
    SpotifyApi.fullSearch(searchTerm).then((results) => {
      this.setState({ searchResults: results })
    })
  }

  addToNewPlaylist = (track, trackIndex = 0) => {
    let tracks = this.state.newPlaylist.filter(element => element.id !== track.id);
    tracks.splice(trackIndex, 0, track);
    this.setState({ newPlaylist: tracks });
  }

  addToCurrentPlaylist = (tracks) => {
    this.setState({ currentPlaylist: tracks });
  }

  deleteTrack = (track) => {
    let tracks = this.state.newPlaylist.filter(element => element.id !== track.id);
    this.setState({ newPlaylist: tracks });
  }

  savePlayList = (playlistName) => {
    if (this.state.newPlaylist.length > 0 && playlistName.length > 0) {
      const playlistUris = this.state.newPlaylist.map(track => track.uri);
      SpotifyApi.sendPlayList(playlistName, playlistUris);
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar search={this.searchSpotify}/>
        <Navbar />
        <div className="Main">
          <Switch>
            <Route path="/search" render={() => <SearchResults results={this.state.searchResults} addToPlaylist={this.addToNewPlaylist} addToCurrentPlaylist={this.addToCurrentPlaylist} />} />
            <Route path="/newPlaylist" render={() => <PlayList savePlayList={this.savePlayList} playlist={this.state.newPlaylist} deleteTrack={this.deleteTrack} />} />
          </Switch>
        </div>
        <Player />
      </div>
    );
  }
}

export default hot(module)(withRouter(App));
