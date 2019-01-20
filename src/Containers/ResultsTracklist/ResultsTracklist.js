import React, { useState, useContext, useEffect } from 'react';
import './ResultsTracklist.css';

import TrackList from '../../Components/TrackList/TrackList';
import Header from '../../Components/Header/Header';

import { ContextStore } from '../../Context/MainContext';

const ResultsTracklist = ({ history }) => {

  const context = useContext(ContextStore);

  const [expand, toggleExpand] = useState(() => ({
    expanded: false,
    state: 'More',
    results: 4 
  }));

  const handleToggleExpand = () => {
    history.location.pathname === '/search/tracks' ? history.push('/search') : history.push('/search/tracks');  
  }

  useEffect(
    () => {
      history.location.pathname === '/search' ?
        toggleExpand({ expanded: false, state: 'More', results: 4 })
      :
        toggleExpand({ expanded: true, state: 'Less', results: Infinity });
    }, [history.location.pathname]
  )

  const loadOnScroll = (e) => {
    console.log('test')
  } 

  return (
    <div className="ResultsTracklist" onScroll={loadOnScroll}>
      <Header name={expand.state} buttonAction={handleToggleExpand}>Tracks</Header>
      <TrackList trackAction={context.addToNewPlaylist} tracklist={context.tracks.slice(0, expand.results)}  />
    </div>
  );
}

export default ResultsTracklist;
