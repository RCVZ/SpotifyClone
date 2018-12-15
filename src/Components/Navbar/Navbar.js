import React, { Component } from 'react';
import './Navbar.css';

import SpotifyApi from '../../util/Spotify';
import { withRouter, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAlignJustify, faListUl, faPlusSquare, faTh } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
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
          <NavLink className="LinkButton" to="/current-playlist"><FontAwesomeIcon icon={faAlignJustify} /> Current Playlist</NavLink>
          <NavLink className="LinkButton" to="/new"><FontAwesomeIcon icon={faPlusSquare} /> New</NavLink>
          <NavLink className="LinkButton" to="/search"><FontAwesomeIcon icon={faSearch} />   Search</NavLink>
          <NavLink className="LinkButton" to="/Library"><FontAwesomeIcon icon={faTh} /> Library</NavLink>
          <NavLink className="LinkButton" to="/-"><FontAwesomeIcon icon={faListUl} /> Playlists</NavLink>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
