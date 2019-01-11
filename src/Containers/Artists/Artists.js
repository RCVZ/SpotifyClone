import React, { useState, useContext } from 'react';
import './Artists.css';

import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';
import Header from '../../Components/Header/Header';

import { withRouter } from "react-router-dom";
import { ContextStore } from '../../Context/MainContext';

const Artists = ({ artists, addToCurrentPlaylist, history }) => {

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

  return (
    <div className="Artists" >
      <Header name={expand.state} buttonAction={handleToggleExpand} artists>Artists</Header>
      <PlaylistDisplay addToCurrentPlaylist={addToCurrentPlaylist} playlists={artists.slice(0, results())} />
    </div>
  );
}

export default withRouter(Artists);
