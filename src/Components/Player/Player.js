import React, { PureComponent } from 'react';
import SpotifyApi from '../../util/Spotify';
import SpotifyPlayer from '../../util/SpotifyPlayer';
import './Player.css';

import ProgressionBar from '../ProgressionBar/ProgressionBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faPlay, faPause, faForward } from '@fortawesome/free-solid-svg-icons'

class Player extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      trackName: '',
      artistName: '',
      albumName: '',
      position: 0,
      duration: 0,
      percentage: 0,
      volume: 1,
      durationCountDown: 0
    }

    this.checkPlayerStateUpdate = null;
  }

  componentDidMount() {
    const token = SpotifyApi.getAccesToken();
    SpotifyPlayer.state.playerCheckInterval = setInterval(() => SpotifyPlayer.checkForPlayer(token), 1000); //  can be improved
    SpotifyPlayer.check();
    this.checkPlayerStateUpdate = setInterval(() => this.getPlayerCurrentState(), 800);
  }

  getPlayerCurrentState = () => {
    this.setState({ 
      position: SpotifyPlayer.state.position,
      trackName: SpotifyPlayer.state.trackName,
      artistName: SpotifyPlayer.state.artistName,
      albumName: SpotifyPlayer.state.albumName,
      duration: SpotifyPlayer.state.duration
     });
    this.durationCountDown(this.state.position);
    console.log(SpotifyPlayer.state);
  }

  onPrevClick = () => {
    SpotifyPlayer.player.previousTrack();
  }

  onPlayClick = () => {
    SpotifyPlayer.player.togglePlay();
  }

  onNextClick = () => {
    SpotifyPlayer.player.nextTrack();
  }

  onVolumeClick = (e) => {
    SpotifyPlayer.player.setVolume(e.target.value);
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
          <span>{artistName}</span>
          <span>{trackName}</span>
        </div>
        <div className="Control">
          <button className="back" onClick={this.onPrevClick} >
            <FontAwesomeIcon className="button"  icon={faBackward} />
          </button>
          <button className="play-pause" onClick={this.onPlayClick} >
            <FontAwesomeIcon className="button" icon={playing ? faPause : faPlay} />
          </button>
          <button className="forward" onClick={this.onNextClick} >
            <FontAwesomeIcon className="button"  icon={faForward} />
          </button>
        </div>
        <ProgressionBar percentage={percentage}/>
      </div>
    );
  }
}

export default Player;
