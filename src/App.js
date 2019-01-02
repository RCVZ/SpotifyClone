import React, { PureComponent } from 'react';
import './App.css';

import SearchBar from './Containers/SearchBar/SearchBar';
import Navbar from './Components/Navbar/Navbar';
import SearchResults from './Components/SearchResults/SearchResults';
import NewPlaylist from './Containers/NewPlaylist/NewPlaylist';
import CurrentPlaylist from './Components/CurrentPlaylist/CurrentPlaylist';
import Library from './Components/Library/Library';
import UserPlaylists from './Containers/UserPlaylists/UserPlaylists';
import ResultsTracklist from './Components/ResultsTracklist/ResultsTracklist';
import Albumslist from './Components/Albumslist/Albumslist';
import Playlists from './Components/Playlists/Playlists';
import Main from './Containers/Main/Main';
import Player from './Containers/Player/Player'; 

import SpotifyApi from './util/Spotify';

import { withRouter } from "react-router-dom";
import { hot } from 'react-hot-loader'

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: {
        playlists: [],
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
      this.setState({ searchResults: results }, () => {
        this.props.history.push('/search'); 
      })
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
    const { searchResults, currentPlaylist } = this.state;
    return (
      <div className="App">
        <SearchBar search={this.searchSpotify}/>
        <Navbar />
        <Main>
          <SearchResults>
            <Playlists 
              playlists={searchResults.playlists}
              addToCurrentPlaylist={this.addToCurrentPlaylist}  
            />
            <ResultsTracklist
              tracklist={searchResults.tracks}
              addToPlaylist={this.addToPlaylist} 
            />
            <Albumslist 
              albums={searchResults.albums} 
              addToCurrentPlaylist={this.addToCurrentPlaylist} 
            />
          </SearchResults>
          <CurrentPlaylist playlist={currentPlaylist} />
          <NewPlaylist 
            savePlayList={this.savePlayList}
            playlist={this.state.newPlaylist}
            deleteTrack={this.deleteTrack}
          />
          <Library addToCurrentPlaylist={this.addToCurrentPlaylist} />
          <UserPlaylists  addToCurrentPlaylist={this.addToCurrentPlaylist}  />
        </Main>        
        <Player currentPlaylist={currentPlaylist} />
      </div>
    );
  }
}

export default hot(module)(withRouter(App));


