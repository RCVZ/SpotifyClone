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
      const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=http://localhost:3000/&scope=playlist-modify-public%20playlist-modify-private%20streaming%20user-read-birthdate%20user-read-email%20user-read-private%20user-read-currently-playing%20user-read-playback-state&response_type=token`;
      window.location = authorizeUrl;
    }
  },

  async getUserId () {
    const access = SpotifyApi.getAccesToken();
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

  async searchPlaylists(searchTerm, offset = 0, limit = 50) {
    const access = await SpotifyApi.getAccesToken();
    const authorization = { Authorization: `Bearer ${access}` };

    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=playlist&limit=${limit}&offset=${offset}`, {
        headers: authorization
      });
      if (response.ok) {
        const playlists = await response.json();
        return playlists.playlists.items;
      } else {
        return []
      }
    }
    catch (error) {
      console.log(error);
    }
  },

  async searchArtists(searchTerm, offset = 0, limit = 50) {
    const access = await SpotifyApi.getAccesToken();
    const authorization = { Authorization: `Bearer ${access}` };

    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=artist&limit=${limit}&offset=${offset}`, {
        headers: authorization
      });
      if (response.ok) {
        const artists = await response.json();
        return artists.artists.items;
      } else {
        return []
      }
    }
    catch (error) {
      console.log(error);
    }

  },

  async searchAlbums(searchTerm, offset = 0, limit = 50) {
    const access = await SpotifyApi.getAccesToken();
    const authorization = { Authorization: `Bearer ${access}` };

    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=album&limit=${limit}&offset=${offset}`, {
        headers: authorization
      });
      if (response.ok) {
        const albums = await response.json();
        return albums.albums.items;
      } else {
        return []
      }
    }
    catch (error) {
      console.log(error);
    }
  },

  async searchTracks(searchTerm, offset= 0, limit= 50) {
    const access = await SpotifyApi.getAccesToken();
    const authorization = { Authorization: `Bearer ${access}` };
    let url = `https://api.spotify.com/v1/search?q=${searchTerm}&type=track&limit=${limit}&offset=${offset}`;

    try {
      const response = await fetch(url, {
        headers: authorization
      });
      if (response.ok) {
        const tracks = await response.json();
        return tracks.tracks.items;
      } else {
        return []
      }
    }
    catch (error) {
      console.log(error);
    }
  },

  async fullSearch(searchTerm) {
    let resultsList = {
      playlists: await SpotifyApi.searchPlaylists(searchTerm),
      artists: await SpotifyApi.searchArtists(searchTerm),
      albums: await SpotifyApi.searchAlbums(searchTerm),
      tracks: await SpotifyApi.searchTracks(searchTerm)
    };
    return resultsList
  },

  async nextResults(searchTerm, offset, type) {
    const limit = 50;
    if (type === 'playlists') {
      return await SpotifyApi.searchPlaylists(searchTerm, offset, limit);

    } else if (type === 'artist') {
      return await SpotifyApi.searchArtists(searchTerm, offset, limit);

    } else if (type === 'albums') {
      return await SpotifyApi.searchAlbums(searchTerm, offset, limit);

    } else if (type === 'tracks') {
      return await SpotifyApi.searchTracks(searchTerm, offset, limit);
    }
  },

  async sendPlayList(playlistName, playlistUris) {
    const access = await SpotifyApi.getAccesToken();
    const userId = await SpotifyApi.getUserId();
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
    const access = await SpotifyApi.getAccesToken();

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
    const access = SpotifyApi.getAccesToken();

    const url = {
      user: `https://api.spotify.com/v1/me/playlists`,
      spotify: `https://api.spotify.com/v1/playlists/${playlistId}/tracks` ,
      spotifyAlbum: `https://api.spotify.com/v1/albums/${playlistId}/tracks`,
      spotifyArtist: `https://api.spotify.com/v1/artist/${playlistId}/top-tracks `
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

  async playTrack(position = 1, uris=[''], type = 'track') {

    const access = SpotifyApi.getAccesToken();
    const authorization = {Authorization: `Bearer ${access}`};

    let body;

    console.log(type)

    if (type === 'playlist' || type === 'album' || type === 'artist') {
      body = {
        "context_uri": uris,
        "offset": { "position": position }
      }
    } else {
      body = {
        "uris": uris,
        "offset": { "uri": position }
      }
    }

    console.log(body)

    try {
      const response = await fetch('https://api.spotify.com/v1/me/player/play', {
        method: "PUT",
        headers: authorization,
        body: JSON.stringify(body)
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
    const access = await SpotifyApi.getAccesToken();

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
  },

    async fetchSpotify(url) {
    const access = await SpotifyApi.getAccesToken();

    const authorization = {
      Authorization: `Bearer ${access}`,
      "Content-Type": "application/json"
    };

    try {
      const response = await fetch(url, {
        headers: authorization
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
      }
    } catch (e) {
      console.log(e);
    }
  },

  async getCategoriePlaylist(categoryId) {
  const access = await SpotifyApi.getAccesToken();

  const authorization = {
    Authorization: `Bearer ${access}`,
    "Content-Type": "application/json"
  };



  try {
    const response = await fetch(`https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`, {
      headers: authorization
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse)
      return jsonResponse.playlists.items;
    }
  } catch (e) {
    console.log(e);
  }
}

};


export default SpotifyApi;
