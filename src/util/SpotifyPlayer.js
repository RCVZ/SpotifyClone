const SpotifyPlayer = {
  const playerCheckInterval = null;
  const trackDurationTimer = null;

  //playerCheckInterval = setInterval(() => SpotifyPlayer.checkForPlayer(), 1000); //should be placed in the component

  checkForPlayer() {
    const { token } = state;
    if (window.Spotify !== null) {
      this.clearInterval(playerCheckInterval);
      player = new window.Spotify.Player({
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
    this.player.on('player_state_changed', state => onStateChanged(state));
    this.player.on('ready', data => {
      let { device_id } = data;
      console.log("Let the music play on!");
      setState({ deviceId: device_id });
      SpotifyApi.transferPlaybackHere(device_id): // should be changed
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
      this.trackDurationTimer = setInterval(()=> getPlayerCurrentstate(), 500) // should be looked at
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
    console.log(player.getCurrentState())
  }

  onPlayClick = () => {
    this.player.togglePlay();
    console.log(player.getCurrentState())
  }

  onNextClick = () => {
    this.player.nextTrack();
    console.log(player.getCurrentState())
  }

  onVolumeClick = (e) => {
    this.player.setVolume(e.target.value).then(() => {
    console.log('Volume updated!');
  })
  }

  durationCountDown = (ms) => {
    let onePercentage  = state.duration / 100;
    let barPercentage = ms /onePercentage;
    this.setState((state) => { //shoul be looked at
      return {percentage: barPercentage}
    })
  }
}
