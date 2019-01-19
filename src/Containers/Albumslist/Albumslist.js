import React, { useState, useContext  } from 'react';
import './Albumslist.css';

import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';
import Header from '../../Components/Header/Header';

import SpotifyApi from '../../util/Spotify';

import { ContextStore } from '../../Context/MainContext';

const Albumslist = ({ history })  => {

  const context = useContext(ContextStore);

  const [expand, toggleExpand] = useState({
    expanded: false,
    state: 'More',
    results: 3
  });

  const handleToggleExpand = () => {
    toggleExpand(() => {
      if (history.location.pathname === '/search/albums') {
        history.push('/search')
        return { expanded: false, state: 'More', results: 3 }
      } else {
        history.push('/search/albums')
        return { expanded: true, state: 'Less', results: Infinity }
      }
    })
  }

  const getPlaylistTracks = (key, playlist) => {
    let images = playlist.images
    let newPlaylist = [];
    return (
      SpotifyApi.getPlaylist(key, 'spotifyAlbum')
      .then((playlist) => {
      playlist.map((item) => {
        item['album'] = { images };
        return newPlaylist.push(item);
      });
      return newPlaylist;
    }));
  }

  const addToNewPlaylist = (key, playlist) => {
    getPlaylistTracks(key, playlist).then((newPlaylist) => {
      context.addToNewPlaylist(newPlaylist, 'tracklist')
    });
  }

  const addToCurrentPlaylist = (key, playlist) => {
    getPlaylistTracks(key, playlist).then((newPlaylist) => {
      context.addToCurrentPlaylist(newPlaylist, 'tracklist')
    });
  }

  return(
    <div className="Albumslist" >
      <Header name={expand.state} buttonAction={handleToggleExpand}>Albums</Header>
      <PlaylistDisplay
        playlists={context.albums.slice(0, expand.results)} 
        addToCurrentPlaylist={addToCurrentPlaylist} 
        addToNewPlaylist={addToNewPlaylist}
        istrackList
        albums 
      />
    </div>
  );
}

export default Albumslist;
