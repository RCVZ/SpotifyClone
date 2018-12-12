import React, { PureComponent } from 'react';
import './Navbar.css';

import SpotifyApi from '../../util/Spotify';
import { Link } from "react-router-dom";

class Navbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userPlaylists: [],
      results: 3
    }
  }

  componentDidMount() {
    SpotifyApi.getPlaylist().then( Playlists => {
      this.setState({ userPlaylists: Playlists })
    })
  }

  handleOnClick = (e) => {
    this.state.results === 3 ? this.setState({results: 6}) :  this.setState({results: 3});
  }

  render() {
    return(
      <div className='Navbar-wrapper'>
        <div className='Navbar'>
          <Link to="/current-playlist">Current Playlist</Link>
          <Link to="/new">New</Link>
          <Link to="/search">Search</Link>
          <Link to="/Library">Library</Link>
          <Link to="/-">Playlists</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
