import React, { useContext } from 'react';
import './PlaylistDisplay.css';

import SpotifyApi from '../../util/Spotify';

import Card from '../../Components/Card/Card';

import { ContextStore } from '../../Context/MainContext';

const PlaylistDisplay = ({ playlists, traverse, albums, libary }) => {

  const context = useContext(ContextStore)

  const handleOnclick = (key, playlist) => {
    let images = playlist.images //<======== temp
    let newPlaylist = [];
    let secondPram = 'spotify';

    if (albums) {
      secondPram = 'spotifyAlbum';
      SpotifyApi.getPlaylist(key, secondPram).then((playlist) => {
        playlist.map((item) => {
          item['album'] = { images }; //<======== temp
          return newPlaylist.push(item);
        });
        context.addToNewPlaylist(newPlaylist, 'tracklist')
      });
    } 

    else if (libary && playlist.type === undefined) {
      SpotifyApi.getCategoriePlaylist(playlist.id).then((playlist) => {
        return traverse(playlist)
      });      
    } 

    else {
      SpotifyApi.getPlaylist(key, secondPram).then((playlists) => {
        playlists.map((playlist) => {
          return newPlaylist.push(playlist.track);
        })
        context.addToNewPlaylist(newPlaylist, 'tracklist')
      });
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
