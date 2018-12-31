import React, { PureComponent } from 'react';
import './Player.css';

import ProgressionBar from '../ProgressionBar/ProgressionBar';
import Track from '../Track/Track';
import Time from '../Time/Time';

import PlayButton from '../Buttons/PlayButton/PlayButton';
import PauseButton from '../Buttons/PlayButton/PlayButton';
import ForwardButton from '../Buttons/ForwardButton/ForwardButton';
import BackwardButton from '../Buttons/BackwardButton/BackwardButton';

import PlaylistButton from '../Buttons/PlaylistButton/PlaylistButton';
import TrackProgression from '../TrackProgression/TrackProgression';


import CurrentPlaylist from '../CurrentPlaylist/CurrentPlaylist';

import SpotifyApi from '../../util/Spotify';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faListUl } from '@fortawesome/free-solid-svg-icons';

class Player extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      deviceId: "",
      loggedIn: true,
      playing: false,
      error: "",
      currentTrack: '',
      trackName: '',
      artistName: '',
      albumName: '',
      position: 0,
      duration: 0,
      volume: 0,
      mute: false,
      showPlaylist: 'hidden',
    }

    this.playerCheckInterval = null;
    this.getPlayerStateTimer = null;      
  }

  componentDidMount() {
    this.setState({ token: SpotifyApi.getAccesToken() });
    this.playerCheckInterval = setInterval(() => this.checkForPlayer(), 800);
  }
 
  checkForPlayer = () => {
    const { token } = this.state;
    if (window.Spotify !== null) {
      clearInterval(this.playerCheckInterval);
      this.player = new window.Spotify.Player({ name: "SpotifyClone", getOAuthToken: cb => { cb(token) } });
      this.createEventHandlers();
      this.player.connect();
      this.getPlayerStateTimer = setInterval(() => this.getPlayerCurrentstate(), 600);
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
      const { current_track } = state.track_window;
      const trackName = current_track.name;
      const albumName = current_track.album.name;
      const artistName = current_track.artists.map(artist => artist.name).join(", ");
      const playing = !state.paused;
      const duration = current_track.duration_ms;
      this.setState({
        currentTrack: current_track, 
        duration: duration,
        trackName: trackName,
        albumName: albumName,
        artistName: artistName,
        playing: playing
      });

      this.player.getVolume().then(volume => this.setState({ volume: volume * 100 }));
    }
  }

  getPlayerCurrentstate = () => {
    this.player.getCurrentState().then((state) => this.setState({ position: state.position}));
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
    let volume = e.target.value;
    this.player.setVolume(volume/100).then(() => this.setState( { volume: volume } ));
  }

  onSeek = (e) => {
    clearInterval(this.getPlayerStateTimer);
    this.setState({ position: e.target.value });
  }

  handleMouseUp = (e) => {
    this.player.seek(this.state.position).then(() => {
      this.getPlayerStateTimer = setInterval(() => this.getPlayerCurrentstate(), 100);
    });    
  }
 
  toggleMute = (e) => {
    if (!this.state.mute) {
      this.player.setVolume(0);
      this.setState({ mute: true })
    } else {
      this.player.setVolume(this.state.volume/100);
      this.setState({ mute: false });
    }   
  }

  togglePlaylist = (e) => {
    if (this.state.showPlaylist === 'hidden') {
      this.setState({ showPlaylist: 'visible' });
    } else {
      this.setState({ showPlaylist: 'hidden' });
    }
  } 

  render() {
    const { playing, currentTrack, volume, duration, position, artistName, trackName, showPlaylist } = this.state;    
    return(
      <div className="Player">
        <div className="Track-info">
          {this.state.playing ? <Track track={currentTrack} /> : <p>{artistName}: {trackName}</p>   }          
        </div>
        <div className="Control">
          <div className="Player-buttons">
            <BackwardButton onBackward={this.onPrevClick} />        
            {playing ? 
            <PauseButton onPlayClick={this.onPlayClick} /> : 
            <PlayButton onPlayClick={this.onPlayClick}/>}
            <ForwardButton onForward={this.onNextClick} />             
          </div>
          <TrackProgression >
            <Time ms={position} />
            <div className="Track-Bar">
              <ProgressionBar currentPostion={position} sliderAction={this.onSeek} maxValue={duration} handleMouseUp={this.handleMouseUp} />
            </div>            
            <Time ms={duration} />
          </TrackProgression>
        </div>
        <div className="Control-Leftside">
          <div className="Current-Playlist-Container" style={{ visibility: showPlaylist }}>
            <CurrentPlaylist playlist={this.props.currentPlaylist} />
          </div>
          <PlaylistButton togglePlaylist={this.togglePlaylist} />
          <div className="volume">
            <FontAwesomeIcon icon={faVolumeUp} size="sm" onClick={this.toggleMute} />
            <div className="volume-bar">
              <ProgressionBar currentPostion={volume} sliderAction={this.onVolumeClick} maxValue={"100"} />
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default Player;
