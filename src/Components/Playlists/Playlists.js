import React, { useState } from 'react';
import './Playlists.css';

import PlaylistDisplay from '../../Containers/PlaylistDisplay/PlaylistDisplay';
import Header from '../Header/Header';

import { withRouter } from "react-router-dom";

const Playlists = ({ playlists, addToCurrentPlaylist, history}) => {

  const [expand, toggleExpand] = useState({
    expanded: false,
    state: 'More',
    results: 3
  });

  const handleToggleExpand = () => {
    if (expand.expanded) {
      toggleExpand({ expanded: false, state: 'Less', results: 3 })
      history.push('/search')
    } else {
      toggleExpand({ expanded: true, state: 'More', results: 20 })
      history.push('/search/playlists')
    }
  }


  return (
    <div className="Playlists" >
      <Header state={expand.state} buttonAction={handleToggleExpand}>Playlists</Header>
      <PlaylistDisplay addToCurrentPlaylist={addToCurrentPlaylist} playlists={playlists.slice(0,expand.results)} albums />
    </div>
  );
}

export default withRouter(Playlists);