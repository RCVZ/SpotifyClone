import React, { Component } from 'react';
import './Navigation.css';

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAlignJustify, faListUl, faPlusSquare, faTh, faBars } from '@fortawesome/free-solid-svg-icons';

class Navigation extends Component {

  onclick = (e) => {

  }

  render() {
    return(
      <>
        <button onClick={this.onclick} className="Mobile-Navigation" >
          <FontAwesomeIcon icon={faBars} size="lg"/>
        </button>
        <div className='Navigation-wrapper'>
          <div className='Navigation'>
            <NavLink to="/search"><FontAwesomeIcon icon={faSearch} />  <span>Search</span></NavLink>
            <NavLink to="/currentPlaylist"><FontAwesomeIcon icon={faAlignJustify} /> <span>Current Playlist</span></NavLink>
            <NavLink to="/newPlaylist"><FontAwesomeIcon icon={faPlusSquare} /> <span>New Playlist</span></NavLink>
            <NavLink to="/library"><FontAwesomeIcon icon={faTh} /> <span>Library</span></NavLink>
            <NavLink to="/userPlaylists"><FontAwesomeIcon icon={faListUl} /> <span>Playlists</span></NavLink>
          </div>
        </div>
      </>
    );
  }
}

export default Navigation;
