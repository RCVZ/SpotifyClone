import React, { PureComponent } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { searchTracks, updatePlayList, updateSearchResults, updatePlaylistName } from './actions';

import SearchBar from './Components/SearchBar/SearchBar';
import Navbar from './Components/Navbar/Navbar';
// import Main from './Components/Main/Main';
import PlayList from './Components/PlayList/PlayList';
import SearchResults from './Components/SearchResults/SearchResults';
import Player from './Components/Player/Player';


import SpotifyApi from './util/Spotify';

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchTracks.searchResults,
    isPending: state.searchTracks.isPending,
    playlist: state.updatePlayList.playlist,
    playlistName: state.updatePlaylistName.playlistName,
    searchTerm: state.searchChange.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchTracks: (searchTerm) => dispatch(searchTracks(searchTerm)),
    onUpdatePlaylist: (playlist) => dispatch(updatePlayList(playlist)),
    onUpdateSearchResults: (updatedResults) => dispatch(updateSearchResults(updatedResults)),
    onUpdatePlaylistName: (playlistName) => dispatch(updatePlaylistName(playlistName))
  }
}


class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      route: ''
    }
  }

  componentWillMount() {
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
      SpotifyApi.sendPlayList(this.props.playlistName, playlistUris).then(()=> {
        this.props.onUpdatePlaylistName('');
        this.props.onUpdatePlaylist();
      });
    }
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }

  render() {
    const { playlist, playlistName, searchResults, onSearchTracks } = this.props;
    //this.props.playlistName should be passed down into playlistcom direct from store.
    return (
      <div className="App">
        <SearchBar
          searchSpotify={onSearchTracks}
          onRouteChange={this.onRouteChange}
        />
        <Navbar />
        <div className='Main'>
          {this.state.route === 'searchResults' ?
            <SearchResults
              trackList={searchResults}
              addToPlaylist={this.addToPlaylist}
              onRouteChange={this.onRouteChange}
            /> : <div></div>
          }
        </div>
        <div className="App-playlist">
          <PlayList trackList={playlist}
            deleteTrack={this.deleteTrack}
            setPlayListName={this.setPlayListName}
            savePlayList={this.savePlayList}
            defaultValue={playlistName}/>
        </div>
        <Player />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
