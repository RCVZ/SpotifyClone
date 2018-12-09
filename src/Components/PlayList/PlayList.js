import React, { PureComponent } from 'react';
import './PlayList.css';

import TrackList from '../TrackList/TrackList';

import { connect } from 'react-redux';
import { updatePlaylistName } from './actions';


const mapStateToProps = (state) => {
  return{
    playlist: state.updatePlayList.playlist,
    playlistName: state.updatePlaylistName.playlistName,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onUpdatePlaylistName: (playlistName) => dispatch(updatePlaylistName(playlistName))
  }
}

class PlayList extends PureComponent {
  handleChange = (e) => {
    this.props.onUpdatePlaylistName(e.target.value);
  }

  render() {
    const { playlist, deleteTrack, savePlayList  } = this.props;
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
          onClick={savePlayList} 
          >SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList);
