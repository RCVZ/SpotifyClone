import React, { PureComponent } from 'react';
import './Main.css';

import SearchResults from '../../Components/SearchResults/SearchResults';
import NewPlaylist from '../NewPlaylist/NewPlaylist';
import CurrentPlaylist from '../../Components/CurrentPlaylist/CurrentPlaylist';
import Library from '../Library/Library';
import UserPlaylists from '../UserPlaylists/UserPlaylists';
import ResultsTracklist from '../ResultsTracklist/ResultsTracklist';
import Albumslist from '../Albumslist/Albumslist';
import Artists from '../Artists/Artists';
import Playlists from '../Playlists/Playlists';

import SpotifyApi from '../../util/Spotify';

import { withRouter, Switch, Route } from "react-router-dom";

class Main extends PureComponent {
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

  loadOnScroll = (e) => {
    const { searchTerm } =  this.state;
    const search = this.props.location.pathname.split('/')[1];
    const route = this.props.location.pathname.split('/')[2];

    if (this.scrollHeight <= e.target.scrollTop && search === 'search' ) {
      this.scrollHeight += 2075;
      this.offset += 50;

      SpotifyApi.nextResults(searchTerm, this.offset, route).then((newResults) => {
        this.setState( state => {
          return { [route]: [...state[route],...newResults] }
          })
       })
     }
  }


  render() {
    const { currentPlaylist  } = this.state;
    const { playlists, artists, albums, tracks } = this.props.results;
    return(
      <div className="Main" onScroll={this.loadOnScroll} >
        <Switch>
          <Route path="/search" render={() => (
            <SearchResults>
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
            <Artists
              artists={artists}
              key={4}
            />
            </SearchResults>
          )}/>
          <Route path="/currentPlaylist" render={() => this.props.children[0]} />
          <Route path="/newPlaylist" render={() => this.props.children[1]} />
          <Route path="/library" render={() => this.props.children[2]} />
          <Route path="/userPlaylists" render={() => this.props.children[3]} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
