import React, { useState, useEffect } from 'react';
import './Albumslist.css';

import PlaylistDisplay from '../../Containers/PlaylistDisplay/PlaylistDisplay';
import Header from '../Header/Header';

import { withRouter } from "react-router-dom";

const Albumslist = ({ albums, addToCurrentPlaylist, history })  => {

  const [expand, toggleExpand] = useState({
    expanded: false,
    state: 'More',
    results: 3
  });

  const handleToggleExpand = () => {
    if (history.location.pathname === '/search/albums') {
      history.push('/search')
    } else {
      history.push('/search/albums')
    }
  }

  useEffect(() => {
    toggleExpand(() => {
      if (history.location.pathname === '/search/albums') {
        return { expanded: true, state: 'Less', results: 20 }
      } else {
        return { expanded: false, state: 'More', results: 3 }
      }
    })
  })

  return(
    <div className="Albumslist" >
      <Header name={expand.state} buttonAction={handleToggleExpand}>Albums</Header>
      <PlaylistDisplay addToCurrentPlaylist={addToCurrentPlaylist} playlists={albums.slice(0,expand.results)} albums />
    </div>
  );
}

export default withRouter(Albumslist);