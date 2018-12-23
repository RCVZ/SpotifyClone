import React, { PureComponent } from 'react';
import './App.css';
import './Components/Main/Main.css';

import SearchBar from './Components/SearchBar/SearchBar';
import Navbar from './Components/Navbar/Navbar';

//import Main from './Components/Main/Main';
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
      searchTerm: '',
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
    console.log("searchTerm", searchTerm);
    SpotifyApi.fullSearch(searchTerm).then((results) => {
      console.log(results);
      this.setState({ searchResults: results })
      console.log("this is the state", this.state);
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar search={this.searchSpotify}/>
        <Navbar />
        <div className="Main">
          <Switch>
            <Route path="/current-playlist" render={() => <PlayList />} />
            <Route path="/search" render={() => <SearchResults results={this.state.searchResults} />} />
          </Switch>
        </div>
        <Player />
      </div>
    );
  }
}

export default hot(module)(withRouter(App));
