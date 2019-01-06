import React, { PureComponent } from 'react';
import './NewPlaylist.css';

import SpotifyApi from '../../util/Spotify';

import TrackList from '../../Components/TrackList/TrackList';
import Button from '../../Components/Buttons/Button/Button';

class NewPlaylist extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      playlistName: ''
    }
  }

  savePlayList = () => {
    const { playlist } = this.props;
    const { playlistName } = this.state;
    if (playlist.length > 0 && playlistName.length > 0) {
      const playlistUris = playlist.map(track => track.uri);
      SpotifyApi.sendPlayList(playlistName, playlistUris);
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
          tracklist={playlist}
          trackAction={deleteTrack}
          inPlaylist
        />
        <Button type="submit" buttonAction={this.savePlayList} name="SAVE TO SPOTIFY" />
      </div>
    );
  }
}

export default NewPlaylist;
