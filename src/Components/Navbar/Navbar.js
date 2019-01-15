import React, { Component } from 'react';
import './Navbar.css';

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAlignJustify, faListUl, faPlusSquare, faTh } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  render() {
    return(
      <div className='Navbar-wrapper'>
        <div className='Navbar'>
          <NavLink to="/search"><FontAwesomeIcon icon={faSearch} />  Search</NavLink>
          <NavLink to="/currentPlaylist"><FontAwesomeIcon icon={faAlignJustify} /> Current Playlist</NavLink>
          <NavLink to="/newPlaylist"><FontAwesomeIcon icon={faPlusSquare} /> New Playlist</NavLink>
          <NavLink to="/library"><FontAwesomeIcon icon={faTh} /> Library</NavLink>
          <NavLink to="/userPlaylists"><FontAwesomeIcon icon={faListUl} /> Playlists</NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
