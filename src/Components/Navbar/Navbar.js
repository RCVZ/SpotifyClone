import React, { PureComponent } from 'react';
import './Navbar.css';

import SpotifyApi from '../../util/Spotify';

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

  changeToPlaylist = (e) => {
    this.props.onRouteChange('playlist');
  }

  render() {
    return(
      <div className='Navbar'>
        <div className='Playlists'>
          <h3 onClick={this.changeToPlaylist}>Current Playlist</h3>
          <h3>New</h3>
          <h3>Search</h3>
          <h3>Library</h3>
          <div>
            <h3 onClick={this.handleOnClick} >Playlists</h3>
            {this.state.userPlaylists
              .slice(0,this.state.results)
              .map(playlist => {
                return <h4 key={playlist.id}>{playlist.name}</h4>
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
