import React, { PureComponent } from 'react';
import './NewPlaylist.css';

import SpotifyApi from '../../util/Spotify';

import TrackList from '../../Components/TrackList/TrackList';
import Button from '../../Components/Buttons/Button/Button';

import { ContextStore } from '../../Context/MainContext';

class NewPlaylist extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      playlistName: ''
    }
  }

  static contextType = ContextStore; 

  savePlayList = () => {
    const { newPlaylist } = this.context;
    const { playlistName } = this.state;
    if (newPlaylist.length > 0 && playlistName.length > 0) {
      const playlistUris = newPlaylist.map(track => track.uri);
      SpotifyApi.sendPlayList(playlistName, playlistUris);
    }
  }

  handleChange = (e) => {
    this.setState({ playlistName: e.target.value });
  }

  render() {
    const { newPlaylist, deleteTrack } = this.context;
    return(
      <div className="Playlist">
        <input
          onChange={this.handleChange}
          placeholder="Playlist"/>
        <TrackList 
          tracklist={newPlaylist}
          trackAction={deleteTrack}
          inPlaylist
        />
        <Button type="submit" buttonAction={this.savePlayList} name="SAVE TO SPOTIFY" />
      </div>
    );
  }
}

export default NewPlaylist;
