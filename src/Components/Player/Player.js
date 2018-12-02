import React, { Component } from 'react';
import SpotifyApi from '../../util/Spotify';
import './Player.css';

import ProgressionBar from '../ProgressionBar/ProgressionBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faPlay, faPause, faForward } from '@fortawesome/free-solid-svg-icons'

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      deviceId: "",
      loggedIn: true,
      error: "",
      trackName: "Track Name",
      artistName: "Artist Name",
      albumName: "Album Name",
      playing: false,
      position: 0,
      duration: 0,
      percentage: 0
    };

    this.playerCheckInterval = null;
    this.trackDurationTimer = null;
  }

  componentDidMount() {
    this.setState({token: SpotifyApi.getAccesToken()});
    this.playerCheckInterval = setInterval(() => this.checkForPlayer(), 1000);
  }

  checkForPlayer() {
    const { token } = this.state;
    if (window.Spotify !== null) {
      clearInterval(this.playerCheckInterval);
      this.player = new window.Spotify.Player({
        name: "SpotifyClone",
        getOAuthToken: cb => { cb(token) },
      });
      this.createEventHandlers();
      this.player.connect();
    }
  }

  createEventHandlers() {
    this.player.on('initialization_error', e => console.error(e));
    this.player.on('authentication_error', e => console.error(e) );
    this.player.on('account_error', e => console.error(e));
    this.player.on('playback_error', e => console.error(e));
    // Playback status updates
    this.player.on('player_state_changed', state => this.onStateChanged(state));
    this.player.on('ready', data => {
      let { device_id } = data;
      console.log("Let the music play on!");
      this.setState({ deviceId: device_id });
      //SpotifyApi.transferPlaybackHere(device_id)
    });
  }

  onStateChanged(state) {
  // if we're no longer listening to music, we'll get a null state.
    if (state !== null) {
      const { current_track: currentTrack } = state.track_window;
      const trackName = currentTrack.name;
      const albumName = currentTrack.album.name;
      const artistName = currentTrack.artists.map(artist => artist.name).join(", ");
      const playing = !state.paused;
      const duration = currentTrack.duration_ms;
      this.setState({
        duration: duration,
        trackName: trackName,
        albumName: albumName,
        artistName: artistName,
        playing: playing,
        percentage: 0
      });
      this.trackDurationTimer = setInterval(()=> this.getPlayerCurrentstate(), 500)
    }
  }

  getPlayerCurrentstate = () => {
    this.player.getCurrentState().then((state) =>{
      this.durationCountDown(state.position);
      // console.log("new state object", state.position);
      //
    })
  }

  onPrevClick = () => {
    this.player.previousTrack();
    console.log(this.player.getCurrentState())
  }

  onPlayClick = () => {
    this.player.togglePlay();
    console.log(this.player.getCurrentState())
  }

  onNextClick = () => {
    this.player.nextTrack();
    console.log(this.player.getCurrentState())
  }

  onVolumeClick = (e) => {
    this.player.setVolume(e.target.value).then(() => {
      console.log('Volume updated!');
    })
  }

  durationCountDown = (ms) => {
    let onePercentage  = this.state.duration / 100;
    let barPercentage = ms /onePercentage;
    this.setState((state) => ({percentage: barPercentage}));
  }

 render() {
    return(
      <div className="Player">
        <div className="track-info">
          <span>{this.state.artistName}</span>
          <span>{this.state.trackName}</span>
          {/* <span>{this.state.albumName}</span> */}
        </div>
        <div className="Control">
          <button className="back" onClick={this.onPrevClick} >
            <FontAwesomeIcon className="button"  icon={faBackward} />
          </button>
          <button className="play-pause" onClick={this.onPlayClick} >
            <FontAwesomeIcon className="button" icon={this.state.playing ? faPause : faPlay} />
          </button>
          <button className="forward" onClick={this.onNextClick} >
            <FontAwesomeIcon className="button"  icon={faForward} />
          </button>
        </div>
        <ProgressionBar percentage={this.state.percentage}/>
      </div>
    );
  }
}

export default Player;
