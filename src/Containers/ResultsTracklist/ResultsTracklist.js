import React, { useState, useContext } from 'react';
import './ResultsTracklist.css';

import TrackList from '../../Components/TrackList/TrackList';
import Header from '../../Components/Header/Header';

import { ContextStore } from '../../Context/MainContext';

const ResultsTracklist = ({ history }) => {

  const context = useContext(ContextStore);

  const [expand, toggleExpand] = useState(() => ({
    expanded: false,
    state: 'More',
    height: 200
  }));

  const [visibleItems, updateVisibility] = useState(() => ({
    start: 0,
    end: 5
  }));

  const [scroll, updateScroll] = useState(() => ({
    scrollTopPosition: 100,
    prevScrollPosition: 0
  }));

  const handleToggleExpand = () => {
    if (history.location.pathname === '/search/tracks') {
      history.push('/search');
      toggleExpand({
        expanded: false,
        state: 'More',
        height: 350
      });
      updateVisibility({
        start: 0,
        end: 5
      });
    } else {
      history.push('/search/tracks');
      toggleExpand({
        expanded: true,
        state: 'Less',
        height: (context.tracks.length - 1) * 50
      });
      updateVisibility({
        start: 0,
        end: 18
      });
    }
  };

  const scrollPosition = (e) => {
    if (!expand.expanded) return

    if (e.target.scrollTop >= scroll.scrollTopPosition) {
      updateVisibility({
        start: visibleItems.start + 2,
        end: visibleItems.end + 2
      });
      updateScroll({
        scrollTopPosition: scroll.scrollTopPosition + 100,
        prevScrollPosition: e.target.scrollTop
      });
    }

    else if ((e.target.scrollTop + 100) <= scroll.scrollTopPosition) {
      updateVisibility({
        start: visibleItems.start - 2,
        end: visibleItems.end - 2
      });
      updateScroll({
        scrollTopPosition: scroll.scrollTopPosition - 100,
        prevScrollPosition: e.target.scrollTop
      });
    }
    console.log(scroll.scrollTopPosition)
    console.log(e.target.scrollTop)
  }

  const loadOnScroll = (e) => {
    console.log('test')
  };

  return (
    <div className="ResultsTracklist" onScroll={loadOnScroll}>
      <Header name={expand.state} buttonAction={handleToggleExpand}>Tracks</Header>
      <div className="viewport" onScroll={scrollPosition} style={{ height: expand.expanded ? '650px' : '350px' }} >
        <div className="list" style={{ height: expand.height }}>
          <TrackList
            trackAction={context.addToNewPlaylist}
            tracklist={context.tracks}
            start={visibleItems.start}
            end={visibleItems.end}
          />
        </div>
      </div>
    </div>
  );
}

export default ResultsTracklist;
