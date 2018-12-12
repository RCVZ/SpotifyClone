import React, { PureComponent } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { updatePlayList, updatePlaylistName } from './actions';
import { Route, Switch, withRouter } from "react-router-dom";

import SearchBar from './Components/SearchBar/SearchBar';
import Navbar from './Components/Navbar/Navbar';
import PlayList from './Components/PlayList/PlayList';
import SearchResults from './Components/SearchResults/SearchResults';
import Player from './Components/Player/Player';


import SpotifyApi from './util/Spotify';

const mapStateToProps = (state) => {
  return {
    playlist: state.updatePlayList.playlist,
    playlistName: state.updatePlaylistName.playlistName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdatePlaylist: (playlist) => dispatch(updatePlayList(playlist)),
    onUpdatePlaylistName: (playlistName) => dispatch(updatePlaylistName(playlistName))
  }
}

class App extends PureComponent {

  componentDidMount() {
    SpotifyApi.getAccesToken();
  }

  addToPlaylist = (track, trackIndex=0) => {
    let tracks = this.props.playlist.filter(element => element.id !== track.id);
    tracks.splice(trackIndex, 0, track);
    this.props.onUpdatePlaylist(tracks);
  }

  deleteTrack = (track) => {
    let tracks = this.props.playlist.filter(element => element.id !== track.id);
    this.props.onUpdatePlaylist(tracks);
  }

  setPlayListName = (playlistName) => {
    this.props.onUpdatePlaylistName(playlistName);
  }

  savePlayList = () => {
    if (this.props.playlist.length > 0 && this.props.playlistName.length > 0 ) {
      const playlistUris = this.props.playlist.map(track => track.uri);
      SpotifyApi.sendPlayList(this.props.playlistName, playlistUris);
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar/>
        <Navbar/>
        <Switch>
          <Route path="/current-playlist" render={(props) => (<PlayList deleteTrack={this.deleteTrack} setPlayListName={this.setPlayListName} savePlayList={this.savePlayList} {...props} />)} />
          <Route path="/search" render={(props) => (<SearchResults addToPlaylist={this.addToPlaylist} {...props} />)} />
        </Switch>
        <Player />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
