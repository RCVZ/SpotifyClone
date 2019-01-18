import React, { useState, useContext } from 'react';
import './Artists.css';

import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';
import Header from '../../Components/Header/Header';

import SpotifyApi from '../../util/Spotify';

import { ContextStore } from '../../Context/MainContext';

const Artists = ({ addToCurrentPlaylist, history }) => {

  const context = useContext(ContextStore);

  const [expand, toggleExpand] = useState({
    expanded: false,
    state: 'More',
    results: 3
  });

  const handleToggleExpand = () => {
    if (history.location.pathname === '/search/artists') {
      history.push('/search')
    } else {
      history.push('/search/artists')
    }
  }

  const results = () => {
    return history.location.pathname === '/search/albums' ? Infinity : 3;
  }

  const handleOnAdd = (key, playlist) => {
    SpotifyApi.getPlaylist(key, 'spotifyArtist').then((playlist) => {
      context.addToNewPlaylist(playlist, 'tracklist');
    });
  }

  return (
    <div className="Artists" >
      <Header name={expand.state} buttonAction={handleToggleExpand} artists>Artists</Header>
      <PlaylistDisplay
        addToCurrentPlaylist={addToCurrentPlaylist}
        playlists={context.artists.slice(0, results())}
        handleOnAdd={handleOnAdd}
        istrackList
      />
    </div>
  );
}

export default Artists;
