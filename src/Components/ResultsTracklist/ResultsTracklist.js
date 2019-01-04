import React, { useState, useEffect } from 'react';
import './ResultsTracklist.css';

import TrackList from '../TrackList/TrackList';
import Header from '../Header/Header';

import { withRouter } from "react-router-dom";

const ResultsTracklist = ({ tracklist, addToPlaylist, history }) => {

  const [expand, toggleExpand] = useState({
    expanded: false,
    state: 'More',
    results: 4
  });

  const handleToggleExpand = () => {
    if (history.location.pathname === '/search/tracks') {
      history.push('/search')
    } else {
      history.push('/search/tracks')
    }
  }

  useEffect(() => {
    toggleExpand(() => {
      if (history.location.pathname === '/search/tracks') {
        return { expanded: true, state: 'Less', results: 20 }
      } else {
        return { expanded: false, state: 'More', results: 4 }
      }
    })
  })

  return (
    <div className="ResultsTracklist" >
      <Header name={expand.state} buttonAction={handleToggleExpand}>Tracks</Header>
      <TrackList trackAction={addToPlaylist} tracklist={tracklist.slice(0, expand.results)}  />
    </div>
  );
}

export default withRouter(ResultsTracklist);