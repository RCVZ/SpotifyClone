import React, { PureComponent } from 'react';
import './App.css';
import './Components/Main/Main.css';

import SearchBar from './Components/SearchBar/SearchBar';
import Navbar from './Components/Navbar/Navbar';

import SearchResults from './Components/SearchResults/SearchResults';
import NewPlaylist from './Components/NewPlaylist/NewPlaylist';
import CurrentPlaylist from './Components/CurrentPlaylist/CurrentPlaylist';
import Library from './Components/Library/Library';
import UserPlaylists from './Components/UserPlaylists/UserPlaylists';

import TrackList from './Components/TrackList/TrackList';
import PlaylistDisplay from './Components/PlaylistDisplay/PlaylistDisplay';

import Main from './Components/Main/Main';

import Player from './Components/Player/Player'; 

import SpotifyApi from './util/Spotify';

import { Switch, Route, withRouter } from "react-router-dom";
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
            <PlaylistDisplay  
              playlists={searchResults.playlists}  
              addToCurrentPlaylist={this.addToCurrentPlaylist} 
            />
            <TrackList  
              trackList={searchResults.tracks}  
              trackAction={this.addToPlaylist} 
            />
            <PlaylistDisplay 
              addToCurrentPlaylist={this.addToCurrentPlaylist} 
              playlists={searchResults.albums} albums 
            />
          </SearchResults>
          <CurrentPlaylist playlist={currentPlaylist} />
          <NewPlaylist
            savePlayList={this.savePlayList}
            playlist={this.state.newPlaylist}
            deleteTrack={this.deleteTrack}
          />
          <Library
            addToCurrentPlaylist={this.addToCurrentPlaylist}
          />
          <UserPlaylists
            addToCurrentPlaylist={this.addToCurrentPlaylist}
          />
        </Main>        
        <Player currentPlaylist={currentPlaylist} />
      </div>
    );
  }
}

export default hot(module)(withRouter(App));


