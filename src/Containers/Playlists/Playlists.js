import React, { useState, useContext } from 'react';
import './Playlists.css';

import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';
import Header from '../../Components/Header/Header';

import { ContextStore } from '../../Context/MainContext';

const Playlists = ({ addToCurrentPlaylist, history  }) => {

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

  return (
    <div className="Playlists" >
      <Header name={expand.state} buttonAction={handleToggleExpand}>Playlists</Header>
      <PlaylistDisplay 
        addToCurrentPlaylist={addToCurrentPlaylist} 
        playlists={context.playlists.slice(0,expand.results)}
        history={history}
        istrackList
      />
    </div>
  );
}

export default Playlists;
