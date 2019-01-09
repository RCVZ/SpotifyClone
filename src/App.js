import React, { PureComponent, createContext } from 'react';
import './App.css';

import SearchBar from './Containers/SearchBar/SearchBar';
import Navbar from './Components/Navbar/Navbar';
import NewPlaylist from './Containers/NewPlaylist/NewPlaylist';
import CurrentPlaylist from './Components/CurrentPlaylist/CurrentPlaylist';
import Main from './Containers/Main/Main';
import Player from './Containers/Player/Player';
import Library from './Containers/Library/Library';
import UserPlaylists from './Containers/UserPlaylists/UserPlaylists';
import SpotifyApi from './util/Spotify';

import { withRouter } from "react-router-dom";

const ContextStore = createContext()

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

    this.scrollHeight = 200;
    this.offset = 50;
  }

  componentDidMount() {
    SpotifyApi.getAccesToken();
  }

  searchSpotify = (searchTerm) => {
    SpotifyApi.fullSearch(searchTerm).then((results) => {
      const { playlists, artists, albums, tracks } = results;
      this.tracks = tracks;
      this.setState({
        searchTerm: searchTerm,
        playlists: playlists,
        artists: artists,
        albums: albums,
        tracks: tracks
      }, this.props.history.push('/search'))
    })
  }

  searchMore = (newResults, route) => {  // temp
    this.setState( state => {
      return { [route]: [...state[route],...newResults] }
   });
  }


  render() {
    const { currentPlaylist, playlists, artists, albums, tracks } = this.state;
    return (
      <ContextStore.Provider value={this.state} >
        <div className="App">
          <SearchBar search={this.searchSpotify} />
          <Navbar />
          <Main results={this.state} searchMore={this.searchMore} >
            <CurrentPlaylist playlist={currentPlaylist} />
            <NewPlaylist
              savePlayList={this.savePlayList}
              playlist={this.state.newPlaylist}
              deleteTrack={this.deleteTrack}
            />
            <Library addToCurrentPlaylist={this.addToCurrentPlaylist} />
            <UserPlaylists addToCurrentPlaylist={this.addToCurrentPlaylist} />
          </Main>
          <Player currentPlaylist={currentPlaylist} />
        </div>
      </ContextStore.Provider>
    );
  }
}

export default withRouter(App);


 /*  <SearchResults>
    <Playlists
      playlists={playlists}
      addToCurrentPlaylist={this.addToCurrentPlaylist}
      key={1}
    />
    <ResultsTracklist
      tracklist={tracks}
      addToPlaylist={this.addToNewPlaylist}
      key={2}
    />
    <Albumslist
      albums={albums}
      addToCurrentPlaylist={this.addToCurrentPlaylist}
      key={3}
    />
    <Artists artists={artists}/>
  </SearchResults>*/

  // addToNewPlaylist = (track, trackIndex = 0) => {
  //   const tracks = this.state.newPlaylist.filter(element => element.id !== track.id);
  //   tracks.splice(trackIndex, 0, track);
  //   this.setState({ newPlaylist: tracks });
  // }
  //
  // addToCurrentPlaylist = (tracks) => {
  //   this.setState({ currentPlaylist: tracks });
  // }
  //
  // deleteTrack = (track) => {
  //   const tracks = this.state.newPlaylist.filter(element => element.id !== track.id);
  //   this.setState({ newPlaylist: tracks });
  // }
  //
  // loadOnScroll = (e) => {
  //   const { searchTerm } =  this.state;
  //   const search = this.props.location.pathname.split('/')[1];
  //   const route = this.props.location.pathname.split('/')[2];
  //
  //   if (this.scrollHeight <= e.target.scrollTop && search === 'search' ) {
  //     this.scrollHeight += 2075;
  //     this.offset += 50;
  //
  //     SpotifyApi.nextResults(searchTerm, this.offset, route).then((newResults) => {
  //       this.setState( state => {
  //         return { [route]: [...state[route],...newResults] }
  //         })
  //      })
  //    }
  // }


  // import SearchResults from './Components/SearchResults/SearchResults';
// import ResultsTracklist from './Containers/ResultsTracklist/ResultsTracklist';
// import Albumslist from './Containers/Albumslist/Albumslist';
// import Artists from './Containers/Artists/Artists';
// import Playlists from './Containers/Playlists/Playlists';