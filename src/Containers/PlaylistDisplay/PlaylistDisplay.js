import React, { PureComponent } from 'react';
import './PlaylistDisplay.css';

import Card from '../../Components/Card/Card';

import SpotifyApi from '../../util/Spotify';

class PlaylistDisplay extends PureComponent {

  handleOnclick = (key, images) => {
    let newPlaylist = [];
    let secondPram = 'spotify';
    if(this.props.albums === true) {
      secondPram = 'spotifyAlbum';
      SpotifyApi.getPlaylist(key, secondPram).then((playlist) => {
        playlist.map((item)=> {
          item['album'] = {images};
          return newPlaylist.push(item);
        });
      });
    } else {
      SpotifyApi.getPlaylist(key, secondPram).then((playlist) => { 
        playlist.map((playlists) => {
          return newPlaylist.push(playlists.track);
        })
      });
    }
    this.props.addToCurrentPlaylist(newPlaylist) 
  }

  render() {
    return(
      <div className="PlaylistDisplay">
        {this.props.playlists.map(playlist => {
          return (
            <Card
              playlist={playlist}
              id={playlist.id}
              key={playlist.id}
              handleOnclick={this.handleOnclick}
            />)
        })}
      </div>
    );
  }
}

export default PlaylistDisplay;
