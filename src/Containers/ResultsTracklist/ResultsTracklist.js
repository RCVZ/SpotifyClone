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
    start: 0,
    end: 4 
  }));

  const [scroll, updateScroll] = useState(() => ({
    scrollTopPosition: 100,
    prevScrollPosition: 0
  }))

  const handleToggleExpand = () => {
    if (history.location.pathname === '/search/tracks' ) {
      history.push('/search');
      toggleExpand({ expanded: false, state: 'More', start: 0, end: 4 });
    } else {       
      history.push('/search/tracks');
      toggleExpand({ expanded: true, state: 'Less', start: 0, end: 8 });
    }  
  }

  // useEffect(
  //   () => {
  //     history.location.pathname === '/search' ?
  //       toggleExpand({ expanded: false, state: 'More', results: 4 })
  //     :
  //       toggleExpand({ expanded: true, state: 'Less', results: Infinity });
  //   }, [history.location.pathname]
  // )

  const scrollPosition = (e) => {
    if (e.target.scrollTop >= scroll.scrollTopPosition) {
      toggleExpand({ expanded: true, state: 'Less', start: expand.start + 1, end: expand.end + 1 });
      updateScroll({
        scrollTopPosition: scroll.scrollTopPosition + 100,
        prevScrollPosition: e.target.scrollTop
      })
    } else if ((e.target.scrollTop + 100) <= scroll.scrollTopPosition ) {
      toggleExpand({ expanded: true, state: 'Less', start: expand.start - 1, end: expand.end - 1 });
      updateScroll({
        scrollTopPosition: scroll.scrollTopPosition - 100,
        prevScrollPosition: e.target.scrollTop
      })
    }
    console.log(e.target.scrollTop)
  }

  const loadOnScroll = (e) => {
    console.log('test')
  } 

  return (
    <div className="ResultsTracklist" onScroll={loadOnScroll}>
      <Header name={expand.state} buttonAction={handleToggleExpand}>Tracks</Header>
      <div className="viewport" onScroll={scrollPosition}>
        <div className="list" style={{ height: context.tracks.length * 100}}>
          <TrackList 
            trackAction={context.addToNewPlaylist} 
            tracklist={context.tracks} 
            start={expand.start}
            end={expand.end}
          />
        </div>
      </div>
    </div>
  );
}

export default ResultsTracklist;
