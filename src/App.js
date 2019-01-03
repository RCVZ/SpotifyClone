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
      searchTerm: '',
      playlists: [],
      artists: [],
      albums: [],
      tracks: [],
      newPlaylist: [],
      currentPlaylist: [],
      expanded: false,
      scroll: false
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

  loadMore = (type, offset = 0) => {
    let searchType, limit;    
    if (!this.state.expanded || this.state.scroll) {
      limit = 50;
      this.setState({ expanded: true});
    } else {
      limit = 3;
      this.setState({ expanded: false});
    }
    if (type === 'playlists') {
      searchType = SpotifyApi.searchPlaylists;
    } else if (type === 'tracks') {
      searchType = SpotifyApi.searchTracks;
    } else if (type === 'albums') {
      searchType = SpotifyApi.searchAlbums;
    } else {
      console.log("error");
      return
    }
    searchType(this.state.searchTerm, offset, limit).then((results) => {
      this.setState({ [type]: results }, () => {
        !this.state.expanded ? this.props.history.push('/search') :
        this.props.history.push('/search/'+ type);
      })
    })
  }

  loadOnScroll = (e) => {
    e.persist()
    console.log(e);
    this.setState({ scroll: true }, () => {
      if (this.state.scroll) {
        this.loadMore('playlists', this.state.playlists.length);
      }
    })
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
              buttonAction={() => this.loadMore('playlists')}  
              state={!this.state.expanded ? 'More...': 'Less...'}
            />
            <ResultsTracklist
              tracklist={tracks}
              addToPlaylist={this.addToNewPlaylist}
              buttonAction={() => this.loadMore('tracks')}   
              state={!this.state.expanded ? 'More...' : 'Less...'}
            />
            <Albumslist 
              albums={albums} 
              addToCurrentPlaylist={this.addToCurrentPlaylist}
              buttonAction={() => this.loadMore('albums')}   
              state={!this.state.expanded ? 'More...' : 'Less...'}
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


