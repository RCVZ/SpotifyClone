import React, { PureComponent } from 'react';
import './Main.css';

import SearchResults from '../../Components/SearchResults/SearchResults';
import NewPlaylist from '../NewPlaylist/NewPlaylist';
import CurrentPlaylist from '../../Components/CurrentPlaylist/CurrentPlaylist';
import Library from '../Library/Library';
import UserPlaylists from '../UserPlaylists/UserPlaylists';
// import Playlist from '../../Components/Playlist/Playlist';
// import ResultsTracklist from '../ResultsTracklist/ResultsTracklist';
// import Albumslist from '../Albumslist/Albumslist';
// import Artists from '../Artists/Artists';
// import Playlists from '../Playlists/Playlists';
import { ContextStore} from '../../Context/MainContext';

import SpotifyApi from '../../util/Spotify';

import { Switch, Route } from "react-router-dom";

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.scrollHeight = 800;
    this.offset = 50;
  }

  static contextType = ContextStore;

  componentDidUpdate() {
    if (this.props.history.location.pathname === '/search') {
      this.offset = 50;
      this.scrollHeight = 300;
    };
  }

  loadOnScroll = (e) => {
    if (!this.props.history.location.pathname.startsWith('/search/')) {
      return // temp fix
    };
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
      <div className="Main" onScroll={this.loadOnScroll}  >
        <Switch>
          <Route path="/search/" render={(props) => (
            <SearchResults {...props} />
          )}/>
          <Route path="/currentPlaylist" render={(props) => <CurrentPlaylist {...props} />} />
          <Route path="/newPlaylist" render={(props) => <NewPlaylist {...props} />} />
          <Route path="/library" render={(props) => <Library {...props} />} />
          <Route path="/userPlaylists" render={(props) => <UserPlaylists {...props} />} />
        </Switch>
      </div>
    );
  }
}


export default Main;





