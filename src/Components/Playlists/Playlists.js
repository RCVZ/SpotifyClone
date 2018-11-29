import React, { Component } from 'react';
import SpotifyApi from '../../util/Spotify';
import './Playlists.css';

class Playlists extends Component {
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
    const { results } = this.state;
    return(
      <div className='Playlists'>
        <h3>New</h3>
        <h3>Search</h3>
        <h3>Library</h3>
        <div>
          <h3 onClick={this.handleOnClick} >Playlists</h3>
          {this.state.userPlaylists
            .slice(0,results)
            .map(playlist => {
              return <h4 key={playlist.id}>{playlist.name}</h4>
            })}

        </div>
      </div>
    );
  }
}

export default Playlists;
