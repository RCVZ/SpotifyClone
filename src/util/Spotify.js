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

  async searchPlaylist(searchTerm, offset, limit=50) {
    const access = this.getAccesToken();
    const authorization = { Authorization: `Bearer ${access}` };

    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=playlist&limit=${limit}&offset=${offset}`, {
        headers: authorization
      });
      if (response.ok) {
        const playlists = await response.json();
        return playlists.playlists.items;
      }
    }
    catch (error) {
      console.log(error);
    }
  },

  async searchArtist(searchTerm, offset, limit=50) {
    const access = this.getAccesToken();
    const authorization = { Authorization: `Bearer ${access}` };

    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=artist&limit=${limit}&offset=${offset}`, {
        headers: authorization
      });
      if (response.ok) {
        const artists = await response.json();
        return artists.artists.items;
      }
    }
    catch (error) {
      console.log(error);
    }

  },

  async searchAlbum(searchTerm, offset, limit=50) {
    const access = this.getAccesToken();
    const authorization = { Authorization: `Bearer ${access}` };

    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=album&limit=${limit}&offset=${offset}`, {
        headers: authorization
      });
      if (response.ok) {
        const albums = await response.json();
        return albums.albums.items;
      }
    }
    catch (error) {
      console.log(error);
    }
  },

  async searchTrack(searchTerm, offset, limit=50) {
    const access = this.getAccesToken();
    const authorization = { Authorization: `Bearer ${access}` };

    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track&limit=${limit}&offset=${offset}`, {
        headers: authorization
      });
      if (response.ok) {
        const tracks = await response.json();
        return tracks.tracks.items;
      }
    }
    catch (error) {
      console.log(error);
    }
  },

  async fullSearch(searchTerm) {
    const offset = 0;
    const limit = 4;
    let resultsList;

    return resultsList = {
      playlists: await this.searchPlaylist(searchTerm, offset, 6),
      artists: await this.searchArtist(searchTerm, offset, limit),
      albums: await this.searchAlbum(searchTerm, offset, 6),
      tracks: await this.searchTrack(searchTerm, offset, 8)
    };

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

    const authorization = {
      Authorization: `Bearer ${access}`,
      "Content-Type": "application/json"
    };
    
    fetch("https://api.spotify.com/v1/me/player", {
      method: "PUT",
      headers: authorization,
      body: JSON.stringify({
        "device_ids": [ deviceId ],
        "play": true,
      })
    });
  },

  async getPlaylist(playlistId='', playlist='user' ) {
    const access = await this.getAccesToken();

    const url = {
      user: `https://api.spotify.com/v1/me/playlists`,
      spotify: `https://api.spotify.com/v1/playlists/${playlistId}/tracks` ,
      spotifyAlbum: `https://api.spotify.com/v1/albums/${playlistId}/tracks` 
    }
    
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
      console.log(e);
    }
  },

  async playTrack(uri, uris=0) {
    const access = this.getAccesToken();
    const authorization = {Authorization: `Bearer ${access}`};

    try {
      const response = await fetch('https://api.spotify.com/v1/me/player/play', {
        method: "PUT",
        headers: authorization,
        body: JSON.stringify({
          "uris": uris ,
          "offset": {"uri": uri }
        })
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
      }
    } catch (e) {
      console.log(e);
    }
  },

  async browserSpotify() {
    const access = await this.getAccesToken();

    const authorization = {
      Authorization: `Bearer ${access}`,
      "Content-Type": "application/json"
    };

    try {
      const response = await fetch('https://api.spotify.com/v1/browse/categories?&limit=50', {
        headers: authorization
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        let items = jsonResponse.categories.items;
        let rearrangedItems = items.map((item) => {
          item['images'] = item.icons
          return item;
        });
        return rearrangedItems;
      }
    } catch (e) {
      console.log(e);
    }
  }

};


export default SpotifyApi;
