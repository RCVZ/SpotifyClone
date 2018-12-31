import React, { PureComponent } from 'react';
import './PlaylistDisplay.css';

import Card from '../Card/Card';
import Button from '../Buttons/Button/Button';

import SpotifyApi from './../../util/Spotify';

class PlaylistDisplay extends PureComponent {
  constructor(props){ 
    super(props);
    this.state= {
      results: 6
    }
  }

  handleOnMore = (e) => {
    //this.state.results === 6 ? this.setState({results: 50}) :  this.setState({results: 6});
  }

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
    //const { results } = this.state;
    return(
      <div className="PlaylistDisplay">
        <div className="Grid">
          {this.props.playlists.map(playlist => {
              return ( 
                <Card 
                  playlist={playlist} 
                  id={playlist.id} 
                  key={playlist.id} 
                  handleOnclick={this.handleOnclick}
                />)
            })}
          <div>
            <Button type="button" onClick={this.handleOnMore} name="More....."/>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaylistDisplay;
