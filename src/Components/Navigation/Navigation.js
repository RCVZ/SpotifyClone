import React, { Component } from 'react';
import './Navigation.css';

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAlignJustify, faListUl, faPlusSquare, faTh } from '@fortawesome/free-solid-svg-icons';

class Navigation extends Component {

  render() {
    return(
      <div className='Navigation-wrapper'>
        <div className='Navigation'>
          <NavLink className="Menu-Button" to="/search/no-results">
            <FontAwesomeIcon icon={faSearch} />  
            <span>Search</span>
          </NavLink>
          <NavLink className="Menu-Button" to="/currentPlaylist">
            <FontAwesomeIcon icon={faAlignJustify} /> 
            <span>Current </span>
            <span> Playlist </span>
          </NavLink>
          <NavLink className="Menu-Button" to="/newPlaylist">
            <FontAwesomeIcon icon={faPlusSquare} /> 
            <span>New </span>
            <span> Playlist </span>
          </NavLink>
          <NavLink className="Menu-Button" to="/library">
            <FontAwesomeIcon icon={faTh} /> 
            <span>Library</span>
          </NavLink>
          <NavLink className="Menu-Button" to="/userPlaylists">
            <FontAwesomeIcon icon={faListUl} /> 
            <span>Playlists</span>
          </NavLink>
        </div>
      </div>  
    );
  }
}

export default Navigation;
