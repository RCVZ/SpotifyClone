import React, { PureComponent } from 'react';
import './NewPlaylist.css';

import TrackList from '../TrackList/TrackList';
import Button from '../Button/Button';

class NewPlaylist extends PureComponent {
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
        <Button type="submit" onClick={this.handleOnsubmit} name="SAVE TO SPOTIFY" />
      </div>
    );
  }
}

export default NewPlaylist;
