import React, { PureComponent } from 'react';
import './PlayList.css';

import TrackList from '../TrackList/TrackList';
import SpotifyApi from './../../util/Spotify';

class PlayList extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      playlistName: ''
    }
  }

  savePlayList = () => {
    if (this.props.playlist.length > 0 && this.props.playlistName.length > 0) {
      const playlistUris = this.props.playlist.map(track => track.uri);
      SpotifyApi.sendPlayList(this.props.playlistName, playlistUris);
    }
  }

  handleChange = (e) => {
    this.setState({ playlistName: e.target.value });
  }

  render() {
    const { playlist, deleteTrack } = this.props;
    return(
      <div className="Playlist">
        <input
          onChange={this.handleChange}
          placeholder="Playlist"/>
        <TrackList 
          trackList={playlist}
          deleteTrack={deleteTrack}
          inPlayList={true}/>
        <button 
          className="Playlist-save"
          type="submit" 
          onClick={this.savePlayList}>SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}

export default PlayList;
