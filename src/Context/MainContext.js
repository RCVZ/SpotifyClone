import React, { Component, createContext } from 'react';
import SpotifyApi from '../util/Spotify';

export const ContextStore = createContext()

export class MainContext extends Component {
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
      offset: 50,
      addToNewPlaylist: this.addToNewPlaylist,
      addToCurrentPlaylist: this.addToCurrentPlaylist,
      deleteTrack: this.deleteTrack,
      updateState: this.updateState,
      searchSpotify: this.searchSpotify,
      searchMore: this.searchMore
    }

    this.scrollHeight = 200;
    this.offset = 50;
  }

  componentDidMount() {
    SpotifyApi.getAccesToken();
  }

  updateState = (property, newState) => {
    this.setState({ [property]: newState })
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
      } //, this.props.history.push('/search') temp
      )
    })
  }

  searchMore = (newResults, route) => {  // temp
    this.setState(state => ({
      [route]: [...state[route], ...newResults]
    }));
  }


  addToNewPlaylist = (track, type = 'track', trackIndex = 0) => {
    this.setState((state) => {
      const tracks = state.newPlaylist.filter(element => element.id !== track.id); 
      const newItem = type === 'track' ? [...tracks, track] : [...tracks, ...track];
      return { newPlaylist: newItem }
    });
  }

  addToCurrentPlaylist = (tracks) => {
    this.setState({ currentPlaylist: tracks });
  }

  deleteTrack = (track) => {
    const tracks = this.state.newPlaylist.filter(element => element.id !== track.id);
    this.setState({ newPlaylist: tracks });
  }


  render() {
    return (
      <ContextStore.Provider value={this.state} >
        {this.props.children}      
      </ContextStore.Provider>
    );
  }
}