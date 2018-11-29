import React, { Component } from 'react';
import './Navbar.css';

import Playlists from '../Playlists/Playlists';

class Navbar extends Component {
  render() {
    return(
      <div className='Navbar'>
        <Playlists />
      </div>
    );
  }
}

export default Navbar;
