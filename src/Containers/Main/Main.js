import React, { PureComponent } from 'react';
import './Main.css';

import SearchResults from '../../Components/SearchResults/SearchResults';
// import NewPlaylist from '../NewPlaylist/NewPlaylist';
// import CurrentPlaylist from '../../Components/CurrentPlaylist/CurrentPlaylist';
// import Library from '../Library/Library';
// import UserPlaylists from '../UserPlaylists/UserPlaylists';
import ResultsTracklist from '../ResultsTracklist/ResultsTracklist';
import Albumslist from '../Albumslist/Albumslist';
import Artists from '../Artists/Artists';
import Playlists from '../Playlists/Playlists';
import { ContextStore} from '../../Context/MainContext';

import SpotifyApi from '../../util/Spotify';

import { Switch, Route } from "react-router-dom";

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.scrollHeight = 200;
    this.offset = 50;
  }

  static contextType = ContextStore;

  componentDidUpdate() {
    if (this.props.history.location.pathname === '/search') {
      this.offset = 50;
      this.scrollHeight = 200;
    };
  }

  loadOnScroll = (e) => {
    const { searchTerm, searchMore } =  this.context;
    const search = this.props.location.pathname.split('/')[1];
    const route = this.props.location.pathname.split('/')[2];

    if (this.scrollHeight <= e.target.scrollTop && search === 'search' ) {
      this.scrollHeight += 2075;
      this.offset += 50;

      SpotifyApi.nextResults(searchTerm, this.offset, route).then((results) => {
        searchMore(results, route);
      })
     }
  }

  render() {
    return(
      <div className="Main" onScroll={this.loadOnScroll} >
        <Switch>
          <Route path="/search" render={() => (
            <SearchResults>
              <Playlists key={1} />
              <ResultsTracklist key={2} />
              <Albumslist key={3} />
            <Artists key={4}  />
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


export default Main;
