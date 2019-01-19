import React, { useState, useContext } from 'react';
import './Playlists.css';

import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';
import Header from '../../Components/Header/Header';

import { ContextStore } from '../../Context/MainContext';

import SpotifyApi from '../../util/Spotify';

const Playlists = ({ history  }) => {

  const context = useContext(ContextStore);

  const [expand, toggleExpand] = useState({
    expanded: false,
    state: 'More',
    results: 3
  });

  const handleToggleExpand = () => {
    toggleExpand(() => {
      if (history.location.pathname === '/search/playlists') {
        history.push('/search')
        return { expanded: false, state: 'More', results: 3 }
      } else {
        history.push('/search/playlists')
        return { expanded: true, state: 'Less', results: Infinity }
      }
    })
  }

  const getPlaylistTracks = (key, playlist) => {
    const newPlaylist = [];
    return (
      SpotifyApi.getPlaylist(key, 'spotify')
      .then((playlist) => {
        playlist.map((playlist) => {
          return newPlaylist.push(playlist.track)
        })
        return newPlaylist
      }));
  };

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

  const openTracks = (key, playlist) => {
    getPlaylistTracks(key, playlist).then((newPlaylist) => {
      context.updateState('tracks', newPlaylist);
      history.push('/search/tracks')
    });
  }

  return (
    <div className="Playlists" >
      <Header name={expand.state} buttonAction={handleToggleExpand}>Playlists</Header>
      <PlaylistDisplay 
        playlists={context.playlists.slice(0, expand.results)}
        addToCurrentPlaylist={addToCurrentPlaylist}
        addToNewPlaylist={addToNewPlaylist}
        openTracks={openTracks}
        history={history}
        istrackList
      />
    </div>
  );
}

export default Playlists;









