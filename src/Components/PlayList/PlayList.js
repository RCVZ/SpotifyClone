import React, { PureComponent } from 'react';
import './PlayList.css';

import TrackList from '../TrackList/TrackList';

class PlayList extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      playlistName: ''
    }
  }

  handleChange = (e) => {
    this.setState({ playlistName: e.target.value });
  }

  handleOnsubmit = () => {
    this.props.savePlayList(this.state.playlistName);
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
          onClick={this.handleOnsubmit}>SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}

export default PlayList;
