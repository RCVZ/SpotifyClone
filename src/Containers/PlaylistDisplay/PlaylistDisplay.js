import React from 'react';
import './PlaylistDisplay.css';

import SpotifyApi from '../../util/Spotify';

import Card from '../../Components/Card/Card';



// can be made cleaner 

const PlaylistDisplay = ({ playlists, addToCurrentPlaylist, albums, libary }) => {
  const handleOnclick = (key, playlist) => {
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
      addToCurrentPlaylist(newPlaylist)

    } 

    else if (libary && playlist.type === undefined) {
      SpotifyApi.getCategoriePlaylist(playlist.id).then((playlist) => {
        return addToCurrentPlaylist(playlist)
      });      
    } 

    else {
      SpotifyApi.getPlaylist(key, secondPram).then((playlists) => {
        playlists.map((playlist) => {
          return newPlaylist.push(playlist.track);
        })
      });
      addToCurrentPlaylist(newPlaylist)
    }

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
