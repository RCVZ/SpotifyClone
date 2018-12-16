import React, { PureComponent } from 'react';
import './Player.css';

import ProgressionBar from '../ProgressionBar/ProgressionBar';
import Text from '../Text/Text';

import SpotifyApi from '../../util/Spotify';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faPlay, faPause, faForward } from '@fortawesome/free-solid-svg-icons';

class Player extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      deviceId: "",
      loggedIn: true,
      playing: false,
      error: "",
      trackName: '',
      artistName: '',
      albumName: '',
      position: 0,
      duration: 0,
      percentage: 0,
      volume: 1,
      durationCountDown: 0
    }

    this.playerCheckInterval = null;
    this.trackDurationTimer = null;      
  }

  componentDidMount() {
    this.setState({ 
      token: SpotifyApi.getAccesToken()
    });
    this.playerCheckInterval = setInterval(() => this.checkForPlayer(), 1000);
  }
 
  checkForPlayer = () => {
    const { token } = this.state;
    if (window.Spotify !== null) {
      clearInterval(this.playerCheckInterval);
      this.player = new window.Spotify.Player({ name: "SpotifyClone", getOAuthToken: cb => { cb(token) } });
      this.createEventHandlers();
      this.player.connect();
    }
  }

  createEventHandlers = () => {
    this.player.on('initialization_error', e => console.error(e));
    this.player.on('authentication_error', e => console.error(e));
    this.player.on('account_error', e => console.error(e));
    this.player.on('playback_error', e => console.error(e));
    this.player.on('player_state_changed', state => this.onStateChanged(state));
    this.player.on('ready', data => {
      let { device_id } = data;
      this.setState({ deviceId: device_id });
      SpotifyApi.transferPlaybackHere(device_id)
    });
  }

  onStateChanged = (state) => { 
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
      this.trackDurationTimer = setInterval(() => this.getPlayerCurrentstate(), 100);
    }
  }

  getPlayerCurrentstate = () => {
    this.player.getCurrentState().then((state) => this.durationCountDown(state.position));
  }

  onPrevClick = () => {
    this.player.previousTrack();
  }

  onPlayClick = () => {
    this.player.togglePlay();
  }

  onNextClick = () => {
    this.player.nextTrack();
  }

  onVolumeClick = (e) => {
    this.player.setVolume(e.target.value).then(() => console.log('Volume updated!'));
  }

  durationCountDown = (ms) => {
    let onePercentage  = this.state.duration / 100;
    let barPercentage = ms /onePercentage;
    this.setState({percentage: barPercentage});
  }

 render() {
   const { artistName, trackName, percentage, playing } = this.state;
    return(
      <div className="Player">
        <div className="track-info">
          <Text name={trackName} artist={artistName} textSize={'0.8rem'} overfl={'visible'} />
        </div>
        <div className="Control">
          <div className="Player-buttons"> 
            <button className="back" onClick={this.onPrevClick} >
              <FontAwesomeIcon className="button" icon={faBackward} />
            </button>
            <button className="play-pause" onClick={this.onPlayClick} >
              <FontAwesomeIcon className="button" icon={playing ? faPause : faPlay} />
            </button>
            <button className="forward" onClick={this.onNextClick} >
              <FontAwesomeIcon className="button" icon={faForward} />
            </button>
          </div>          
          <ProgressionBar percentage={percentage} />
        </div>
        <div className="volume">
          <p>volume</p>
        </div>
      </div>
    );
  }
}

export default Player;
