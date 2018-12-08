const clientId = '7234ae8b9cac4739b9af4f2806d43c7c';
let userAccesToken;

const SpotifyApi = {
  getAccesToken() {
    if(typeof userAccesToken !== 'undefined') {
      return userAccesToken;
    }

    const accessTokenPara = window.location.href.match(/access_token=([^&]*)/);
    const expiresInPara = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenPara && expiresInPara) {
      userAccesToken = accessTokenPara[1];
      const expiresIn = Number(expiresInPara[1]);
      window.setTimeout(() => userAccesToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return userAccesToken;
    } else {
      const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=http://localhost:3000/&scope=playlist-modify-public%20playlist-modify-private%20streaming%20user-read-birthdate%20user-read-email%20user-read-private&response_type=token`;
      window.location = authorizeUrl;
    }
  },

  async getUserId () {
    const access = this.getAccesToken();
    const authorization = {Authorization: `Bearer ${access}`};
    let userId = '';

    try {
      const response = await fetch('https://api.spotify.com/v1/me', {
        headers: authorization
      });

      if(response.ok) {
        const jsonResponse = await response.json();
        userId = jsonResponse.id;
        return userId;
      }
    }
    catch(error) {
      console.log(error);
    }
  },

  async search(searchTerm) {
    const access = this.getAccesToken();
    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {
        headers: {
          Authorization: `Bearer ${access}`
        }
      });
      if(response.ok){
        const jsonResponse = await response.json();
        return await jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.artists[0].name,
          songname: track.name,
          album: track.album.name,
          uri: track.uri,
          albumImg: track.album.images[2],
          duration: track.duration_ms
        }));
      }
    }
    catch(error) {
      console.log(error);
    }
  },

  async fullSearch(searchTerm) {
    const access = this.getAccesToken();
    const resultsList = {
      playlists: [],
      artists: [],
      albums: [],
      tracks: []
    };
    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=playlist`, {
        headers: {
          Authorization: `Bearer ${access}`
        }
      });
      if(response.ok){
        const playlists = await response.json();
        resultsList.playlists = playlists.playlists.items;
      }
    }
    catch(error) {
      console.log(error);
    }
    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=artist`, {
        headers: {
          Authorization: `Bearer ${access}`
        }
      });
      if(response.ok){
        const artists = await response.json();
        resultsList.artists = artists.artists.items;
      }
    }
    catch(error) {
      console.log(error);
    }
    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=album`, {
        headers: {
          Authorization: `Bearer ${access}`
        }
      });
      if(response.ok){
        const albums = await response.json();
        resultsList.albums = albums.albums.items;
      }
    }
    catch(error) {
      console.log(error);
    }
    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {
        headers: {
          Authorization: `Bearer ${access}`
        }
      });
      if(response.ok){
        const tracks = await response.json();
        resultsList.tracks = tracks.tracks.items
        console.log(resultsList);
        return resultsList
      }
    }
    catch(error) {
      console.log(error);
    }
  },

  async sendPlayList(playlistName, playlistUris) {
    const access = this.getAccesToken();
    const userId = await this.getUserId();

    const authorization = {Authorization: `Bearer ${access}`};

    try {
      const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        method: 'POST',
        headers: authorization,
        body: JSON.stringify({name: playlistName})
      });

      if(response.ok) {
        const jsonResponse = await response.json();
        const playlistId = jsonResponse.id;
        
        try {
          const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            headers: authorization,
            method: 'POST',
            body: JSON.stringify({uris:playlistUris})
          });
          if(response.ok){
            return
          }

        } catch(error) {
          console.log(error);
        }
      }
    }
    catch(error) {
      console.log(error);
    }
  },

  async transferPlaybackHere(deviceId) { // should be changed
    const access = this.getAccesToken();
    fetch("https://api.spotify.com/v1/me/player", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${access}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "device_ids": [ deviceId ],
        "play": true,
      })
    });
  },

  async getPlaylist(playlistId='', playlist='user' ) {
    const url = {
      user: `https://api.spotify.com/v1/me/playlists`,
      spotify: `https://api.spotify.com/v1/playlists/${playlistId}/tracks` 
    }
    const access = this.getAccesToken();
    const authorization = {
      Authorization: `Bearer ${access}`,
     "Content-Type": "application/json"
    };

    try {
      const response = await fetch(url[playlist], {
        headers: authorization
      });

      if(response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse.items;
      }
    } catch (e) {
      console.log(e)
    }
  },

  async playTrack(uri) {
    console.log('at Api', uri);
    const access = this.getAccesToken();
    const authorization = {Authorization: `Bearer ${access}`};

    try {
      const response = await fetch('https://api.spotify.com/v1/me/player/play', {
        method: "PUT",
        headers: authorization,
        body: JSON.stringify({
          "uris": [ uri ]
        })
      });
      const jsonResponse = await response.json();
      console.log("playresponse",jsonResponse);
    } catch (e) {
      console.log(e)
    }
  }
};


export default SpotifyApi;
