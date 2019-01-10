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
      deleteTrack: this.deleteTrack

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
    this.setState(state => {
      return { [route]: [...state[route], ...newResults] }
    });
  }


  addToNewPlaylist = (track, trackIndex = 0) => {
    const tracks = this.state.newPlaylist.filter(element => element.id !== track.id);
    tracks.splice(trackIndex, 0, track);
    this.setState({ newPlaylist: tracks });
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