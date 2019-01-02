import React, { PureComponent } from 'react';
import './NewPlaylist.css';

import TrackList from '../../Components/TrackList/TrackList';
import Button from '../../Components/Buttons/Button/Button';

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
          tracklist={playlist}
          trackAction={deleteTrack}
          inPlaylist/>
        <Button type="submit" onClick={this.handleOnsubmit} name="SAVE TO SPOTIFY" />
      </div>
    );
  }
}

export default NewPlaylist;
