import React from 'react';
import './PlaylistDisplay.css';

import SpotifyApi from '../../util/Spotify';

import Card from '../../Components/Card/Card';


const PlaylistDisplay = ({ playlists, addToCurrentPlaylist, albums }) => {

  const handleOnclick = (key, playlist) => {
    SpotifyApi.fetchSpotify(playlist.href); // test
    let image = playlist.images //<======== quick fix
    let newPlaylist = [];
    let secondPram = 'spotify';
    if (albums) {
      secondPram = 'spotifyAlbum';
      SpotifyApi.getPlaylist(key, secondPram).then((playlist) => {
        playlist.map((item) => {
          item['album'] = { image }; //<======== quick fix
          return newPlaylist.push(item);
        });
      });
    } else {
      SpotifyApi.getPlaylist(key, secondPram).then((playlists) => {
        playlists.map((playlist) => {
          return newPlaylist.push(playlist.track);
        })
      });
    }
    console.log('test:', newPlaylist);
    addToCurrentPlaylist(newPlaylist)
  }


  return (
    <div className="PlaylistDisplay">
      {playlists.map(playlist => {
        return (
          <Card
            playlist={playlist}
            id={playlist.id}
            key={playlist.id}
            handleOnclick={handleOnclick}
          />)
      })}
    </div>
  );
}

export default PlaylistDisplay;
