import React, { PureComponent } from 'react';
import './PlaylistDisplay.css';

import Card from '../Card/Card';
import Button from '../Button/Button';

import SpotifyApi from './../../util/Spotify';

import { connect } from 'react-redux';
import { updatePlaylistName, updatePlayList } from './actions';


const mapDispatchToProps = (dispatch) => {
  return {
    onUpdatePlaylistName: (playlistName) => dispatch(updatePlaylistName(playlistName)),
    onUpdatePlaylist: (playlist) => dispatch(updatePlayList(playlist)),
  }
}

class PlaylistDisplay extends PureComponent {
  constructor(props){
    super(props);
    this.state= {
      results: 10
    }
  }

  handleOnMore = (e) => {
    this.state.results === 10 ? this.setState({results: 20}) :  this.setState({results: 10});
  }

  handleOnclick = (key, images) => {
    let newPlaylist = [];
    let secondPram = 'spotify';
    if(this.props.albums === true) {
      secondPram = 'spotifyAlbum';
      SpotifyApi.getPlaylist(key, secondPram).then((playlist) => {
        playlist.map((item)=>{
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
    this.props.onUpdatePlaylist(newPlaylist) 
  }

  render() {
    const { results } = this.state;
    return(
      <div className="PlaylistDisplay">
        <div className="Grid">
          {this.props.playlists
            .slice(0,results)
            .map(playlist => {
              return <Card playlist={playlist} id={playlist.id} key={playlist.id} handleOnclick={this.handleOnclick}/>
            })}
          <div>
            <Button type="button" onClick={this.handleOnMore} name="More....."/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null , mapDispatchToProps)(PlaylistDisplay);
