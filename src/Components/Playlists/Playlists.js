import React, { Component } from 'react';
import SpotifyApi from '../../util/Spotify';
import './Playlists.css';

class Playlists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPlaylists: []
    }
  }

  componentDidMount() {
    SpotifyApi.getPlaylist().then( Playlists => {
      console.log('test',Playlists);
      this.setState({
        userPlaylists: Playlists
      })
    })
  }

  render() {
    return(
      <div className='Playlists'>
        <h3>Playlists</h3>
        {this.state.userPlaylists.map(playlist => {
          return <h4 key={playlist.id}>{playlist.name}</h4>
        })}
      </div>
    );
  }
}

export default Playlists;
