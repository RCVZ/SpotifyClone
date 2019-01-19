import React, { useState, useContext, useEffect } from 'react';
import './ResultsTracklist.css';

import TrackList from '../../Components/TrackList/TrackList';
import Header from '../../Components/Header/Header';

import { ContextStore } from '../../Context/MainContext';

const ResultsTracklist = ({ history, fromPlaylist }) => {

  const context = useContext(ContextStore);

  const [expand, toggleExpand] = useState(() => ({
    expanded: false,
    state: 'More',
    results: fromPlaylist ? Infinity : 4 
  }));

  const handleToggleExpand = () => {
    if (history.location.pathname === '/search/tracks') {
      history.push('/search')
    } else {
      history.push('/search/tracks')
    }  
  }

  useEffect(
    () => {
      if (history.location.pathname === '/search') {
        toggleExpand({ expanded: false, state: 'More', results: 4 });
      } else {
        toggleExpand({ expanded: true, state: 'Less', results: Infinity });
      }
    }, [history.location.pathname]
  )

  return (
    <div className="ResultsTracklist" >
      <Header name={expand.state} buttonAction={handleToggleExpand}>Tracks</Header>
      <TrackList trackAction={context.addToNewPlaylist} tracklist={context.tracks.slice(0, expand.results)}  />
    </div>
  );
}

export default ResultsTracklist;
