import React, { PureComponent } from 'react';
import './PlayList.css';

import TrackList from '../TrackList/TrackList';

import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return{
    playlist: state.updatePlayList.playlist
  }
}

class PlayList extends PureComponent {
  handleChange = (e) => {
    this.props.setPlayListName(e.target.value);
  }


  render() {
    const { defaultValue, playlist, deleteTrack, savePlayList  } = this.props;
    return(
      <div className="Playlist">
        <input
          onChange={this.handleChange}
          value={defaultValue}/>
        <TrackList trackList={playlist}
          deleteTrack={deleteTrack}
          inPlayList={true}/>
        <button type="submit" onClick={savePlayList} className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(PlayList);
