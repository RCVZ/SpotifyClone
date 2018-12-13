import React, { PureComponent } from 'react';
import './PlayList.css';

import TrackList from '../TrackList/TrackList';
import SpotifyApi from './../../util/Spotify';

import { connect } from 'react-redux';
import { updatePlaylistName, updatePlayList } from './actions';


const mapStateToProps = (state) => {
  return {
    playlist: state.updatePlayList.playlist,
    playlistName: state.updatePlaylistName.playlistName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdatePlaylist: (playlist) => dispatch(updatePlayList(playlist)),
    onUpdatePlaylistName: (playlistName) => dispatch(updatePlaylistName(playlistName))
  }
}

class PlayList extends PureComponent {

  deleteTrack = (track) => {
    let tracks = this.props.playlist.filter(element => element.id !== track.id);
    this.props.onUpdatePlaylist(tracks);
  }

  setPlayListName = (playlistName) => {
    this.props.onUpdatePlaylistName(playlistName);
  }

  savePlayList = () => {
    if (this.props.playlist.length > 0 && this.props.playlistName.length > 0) {
      const playlistUris = this.props.playlist.map(track => track.uri);
      SpotifyApi.sendPlayList(this.props.playlistName, playlistUris);
    }
  }

  handleChange = (e) => {
    this.props.onUpdatePlaylistName(e.target.value);
  }

  render() {
    const { playlist } = this.props;
    return(
      <div className="Playlist">
        <input
          onChange={this.handleChange}
          placeholder="Playlist"/>
        <TrackList 
          trackList={playlist}
          deleteTrack={this.deleteTrack}
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayList);
