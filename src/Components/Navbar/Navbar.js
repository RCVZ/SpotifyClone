import React, { Component } from 'react';
import './Navbar.css';

import { withRouter, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAlignJustify, faListUl, faPlusSquare, faTh } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  render() {
    return(
      <div className='Navbar-wrapper'>
        <div className='Navbar'>
          <NavLink className="LinkButton" to="/search"><FontAwesomeIcon icon={faSearch} />  Search</NavLink>
          <NavLink className="LinkButton" to="/currentPlaylist"><FontAwesomeIcon icon={faAlignJustify} /> Current Playlist</NavLink>
          <NavLink className="LinkButton" to="/newPlaylist"><FontAwesomeIcon icon={faPlusSquare} /> New Playlist</NavLink>
          <NavLink className="LinkButton" to="/library"><FontAwesomeIcon icon={faTh} /> Library</NavLink>
          <NavLink className="LinkButton" to="/userPlaylists"><FontAwesomeIcon icon={faListUl} /> Playlists</NavLink>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
