import React, { useState, useContext } from 'react';
import './Artists.css';

import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';
import Header from '../../Components/Header/Header';

import SpotifyApi from '../../util/Spotify';

import { ContextStore } from '../../Context/MainContext';

const Artists = ({ history }) => {

  const context = useContext(ContextStore);

  const [expand, toggleExpand] = useState({
    expanded: false,
    state: 'More',
    results: 3
  });

  const handleToggleExpand = () => {
    toggleExpand(() => {
      if (history.location.pathname === '/search/artists') {
        history.push('/search')
        return { expanded: false, state: 'More', results: 3 }
      } else {
        history.push('/search/artists')
        return { expanded: true, state: 'Less', results: Infinity }
      }
    })
  }

  const getPlaylistTracks = (key, playlist) => {
    return (
      SpotifyApi.getPlaylist(key, 'spotifyArtist')
        .then((newPlaylist) => {
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

  return (
    <div className="Artists" >
      <Header name={expand.state} buttonAction={handleToggleExpand} artists>Artists</Header>
      <PlaylistDisplay
        playlists={context.artists.slice(0, expand.results)}
        addToCurrentPlaylist={addToCurrentPlaylist}
        addToNewPlaylist={addToNewPlaylist}
        istrackList
      />
    </div>
  );
}

export default Artists;
