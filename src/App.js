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

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      playlists: [],
      artists: [],
      albums: [],
      tracks: [],
      newPlaylist: [],
      currentPlaylist: [],
      scroll: false,
      offset: 0     
    }
  }

  componentDidMount() {
    SpotifyApi.getAccesToken();
  }
  
  searchSpotify = (searchTerm) => {
    SpotifyApi.fullSearch(searchTerm).then((results) => {
      const { playlists, artists, albums, tracks } = results;
      this.setState({ 
        searchTerm: searchTerm,
        playlists: playlists,
        artists: artists,
        albums: albums,
        tracks: tracks
      }, () => {
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

  getUrisList = () => { // needs to be restructured 
    const newList = [];
    this.props.tracklist.map((track) => newList.push(track.uri));
    return newList;
  }

  handleOnclick = (key, images) => { // needs to be restructured 
    let newPlaylist = [];
    let secondPram = 'spotify';
    if (this.props.albums === true) {
      secondPram = 'spotifyAlbum';
      SpotifyApi.getPlaylist(key, secondPram).then((playlist) => {
        playlist.map((item) => {
          item['album'] = { images };
          return newPlaylist.push(item);
        });
      });
    } else {
      SpotifyApi.getPlaylist(key, secondPram).then((playlist) => {
        playlist.map((playlists) => {
          return newPlaylist.push(playlists.track);
        })
      });
    }
    this.props.addToCurrentPlaylist(newPlaylist)
  }


  loadOnScroll = (e) => {
    // e.persist()
    // this.setState({ scroll: true }, () => {
    //   if (this.state.scroll) {
    //     this.loadMore('playlists', this.state.playlists.length);
    //   }
    // })
  }

  render() {
    const { currentPlaylist, playlists, artists, albums, tracks } = this.state;
    return (
      <div className="App">
        <SearchBar  search={this.searchSpotify}/>
        <Navbar />
        <Main  loadOnScroll={this.loadOnScroll}>
          <SearchResults>
            <Playlists 
              playlists={playlists}
              addToCurrentPlaylist={this.addToCurrentPlaylist}
            />
            <ResultsTracklist
              tracklist={tracks}
              addToPlaylist={this.addToNewPlaylist}
            />
            <Albumslist 
              albums={albums} 
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

export default withRouter(App);


