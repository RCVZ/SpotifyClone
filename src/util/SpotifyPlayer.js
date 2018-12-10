import SpotifyApi from './Spotify';

const SpotifyPlayer = {

  player: '',

  state: {
    token: SpotifyApi.getAccesToken(),
    deviceId: "",
    loggedIn: true,
    playing: false,
    error: "",
    trackName: "Track Name",
    artistName: "Artist Name",
    albumName: "Album Name",
    durationCountDown: 0,
    position: 0,
    duration: 0,
    percentage: 0,
    volume: 1,
    playerCheckInterval: null,
    checkStatePlayer: null
  },  

  checkForPlayer(token) {    
    if (window.Spotify !== null) {
      clearInterval(this.state.playerCheckInterval);
       this.player = new window.Spotify.Player({
        name: "SpotifyClone",
        getOAuthToken: cb => { cb(token) },
      });
      this.createEventHandlers();
      this.player.connect();
    }
  },

  createEventHandlers() {
    this.player.on('initialization_error', e => console.error(e));
    this.player.on('authentication_error', e => console.error(e) );
    this.player.on('account_error', e => console.error(e));
    this.player.on('playback_error', e => console.error(e));
    this.player.on('player_state_changed', (state) => {
      this.onStateChanged(state);
      this.state.checkStatePlayer = setInterval(() => {this.getPlayerCurrentstate()}, 500);
    });
    this.player.on('ready', data => {
      let { device_id } = data;
      console.log("Let the music play on!");
      this.state.deviceId = device_id;
      SpotifyApi.transferPlaybackHere(device_id);
    });
  },

  onStateChanged(state) {
    if (state !== null) {
      const { current_track: currentTrack } = state.track_window;
      const trackName = currentTrack.name;
      const albumName = currentTrack.album.name;
      const artistName = currentTrack.artists.map(artist => artist.name).join(", ");
      const playing = !state.paused;
      const duration = currentTrack.duration_ms;
      const newState = {
        duration: duration,
        trackName: trackName,
        albumName: albumName,
        artistName: artistName,
        playing: playing,
        percentage: 0,
        position: state.position
      }
      this.state = {...this.state, ...newState};
      this.state.position = state.position
    }
  },

   getPlayerCurrentstate() {
     this.player.getCurrentState().then((state) => this.state.position = state.position);
   },

  prev()  {
    this.player.previousTrack();
    console.log(this.player.getCurrentState())
  },

  play_pause() {
    this.player.togglePlay();
    console.log(this.player.getCurrentState())
  },

  next() {
    this.player.nextTrack();
    console.log(this.player.getCurrentState())
  },

  volume(e) {
    this.player.setVolume(e.target.value).then(() => console.log('Volume updated!'));
  },

  check() {
    console.log(this.state);
  }
}


export default SpotifyPlayer;

// old code
 // checkForPlayer() {
  //   const { token } = this.state;
  //   if (window.Spotify !== null) {
  //     clearInterval(this.playerCheckInterval);
  //     this.player = new window.Spotify.Player({ name: "SpotifyClone", getOAuthToken: cb => { cb(token) } });
  //     this.createEventHandlers();
  //     this.player.connect();
  //   }
  // }

  // createEventHandlers() {
  //   this.player.on('initialization_error', e => console.error(e));
  //   this.player.on('authentication_error', e => console.error(e));
  //   this.player.on('account_error', e => console.error(e));
  //   this.player.on('playback_error', e => console.error(e));
  //   this.player.on('player_state_changed', state => this.onStateChanged(state));
  //   this.player.on('ready', data => {
  //     let { device_id } = data;
  //     this.setState({ deviceId: device_id });
  //     //SpotifyApi.transferPlaybackHere(device_id)
  //   });
  // }

  // onStateChanged(state) { // dubbel track state check should be restructured                
  // // if we're no longer listening to music, we'll get a null state.
  //   if (state !== null) {
  //     const { current_track: currentTrack } = state.track_window;
  //     const trackName = currentTrack.name;
  //     const albumName = currentTrack.album.name;
  //     const artistName = currentTrack.artists.map(artist => artist.name).join(", ");
  //     const playing = !state.paused;
  //     const duration = currentTrack.duration_ms;
  //     this.setState({
  //       duration: duration,
  //       trackName: trackName,
  //       albumName: albumName,
  //       artistName: artistName,
  //       playing: playing,
  //       percentage: 0
  //     });
  //     this.trackDurationTimer = setInterval(() => this.getPlayerCurrentstate(), 100);
  //   }
  // }

  // getPlayerCurrentstate = () => {
  //   this.player.getCurrentState().then((state) => this.durationCountDown(state.position));
  // }

  // onPrevClick = () => {
  //   this.player.previousTrack();
  // }

  // onPlayClick = () => {
  //   this.player.togglePlay();
  // }

  // onNextClick = () => {
  //   this.player.nextTrack();
  // }

  // onVolumeClick = (e) => {
  //   this.player.setVolume(e.target.value).then(() => console.log('Volume updated!'));
  // }

