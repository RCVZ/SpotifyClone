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
      offset: 50     
    }

    this.scrollHeight = 2075;
  }  

  componentDidMount() {
    SpotifyApi.getAccesToken();
  }

  componentDidUpdate() {    
    if (this.props.history.location.pathname === '/search') {
     this.setState({ offset: 50});
     this.scrollHeight = 2075;
    };
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
      }, this.props.history.push('/search'))
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

  loadOnScroll = (e) => {
    const { searchTerm, offset } =  this.state;
    const route = this.props.location.pathname.split('/')[2];
    const loadMore = this.scrollHeight <= e.target.scrollTop + 715;
    if (loadMore) {
      this.scrollHeight += 2075;
      SpotifyApi.nextResults(searchTerm, offset, route).then((newResults) => {
        this.setState((state) => {
          const currentState = [...state[route]];
          const merged = [...currentState, ...newResults];
          return { [route]: merged, offset: state.offset + 50}})
      })
     }
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


