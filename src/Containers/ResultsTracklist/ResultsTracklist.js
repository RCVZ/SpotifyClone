import React, { useState, useContext, useCallback } from 'react';
import './ResultsTracklist.css';

import TrackList from '../../Components/TrackList/TrackList';
import Header from '../../Components/Header/Header';
import { ContextStore } from '../../Context/MainContext';

const ResultsTracklist = ({ history, loadMore }) => {
  const context = useContext(ContextStore);

  const [visibleItems, updateVisibility] = useState(() => ({ start: 0, end: 6 }));
  const [scrollTopPosition, updateScrollTopPosition] = useState(() => 100 );
  const [expanded, toggleExpand] = useState(() => false );
  const [scrollActive, activeScroll] = useState(() => ({active: false, timer: null}))

  const handleToggleExpand = () => {
    if (history.location.pathname === '/search/tracks') {
      history.push('/search');
      toggleExpand(false);
      updateVisibility({ start: 0, end: 6 });
      updateScrollTopPosition(300);
    } else {
      history.push('/search/tracks');
      toggleExpand(true);
      updateVisibility({ start: 0,  end: 18 });
    }
  };

  const tracksWithPosition = (list) => {
    let cList = [...list];
    cList.forEach((element, index) => {
      element['position'] = getPosition(index);
    });
    return cList
  }

  const getPosition = (index) => {
    let position;
    if (index % 2 === 0) {
      position = index * 50;
      return { top: position, left: 0 }
    } else {
      position = (index - 1) * 50;
      return { top: position, right: 0 }
    }
  };

  const scrollPosition = (e) => {
    if (!expanded) return
    activeScroll({ active: true, timer: clearTimeout(scrollActive.timer) })
    activeScroll({ active: true, timer: setTimeout(() => activeScroll({active: false, timer: null}), 66)})
    if (e.target.scrollTop >= scrollTopPosition) {
      updateVisibility({ start: visibleItems.start + 2, end: visibleItems.end + 2 });
      updateScrollTopPosition(scrollTopPosition + 100)
      //console.log(scrollTopPosition);
    }

    else if ((e.target.scrollTop + 100) <= scrollTopPosition) {
      updateVisibility({ start: visibleItems.start - 2, end: visibleItems.end - 2 });
      updateScrollTopPosition(scrollTopPosition - 100)
    }

    if (context.tracks.length <= (visibleItems.end + 6)) {
      loadMore();
    }
  }

  const memoTracksWithPosition = useCallback(() => {
    return tracksWithPosition(context.tracks);
  }, [context.tracks]);

  let test = memoTracksWithPosition().slice(visibleItems.start, (visibleItems.start + 18));

  return (
    <div className="ResultsTracklist">
      <Header name={expanded ? 'Less' : 'More' } buttonAction={handleToggleExpand}>Tracks</Header>
      <div className="viewport" onScroll={scrollPosition} style={{ height: expanded ? '675px' : '350px' }} >
        <div className="list" style={{ height: expanded ? (context.tracks.length * 50 ) + 100 : '350px', pointerEvents: scrollActive.active ? 'none': 'auto' }}>
          <TrackList
            trackAction={context.addToNewPlaylist}
            tracklist={test}
            start={visibleItems.start}
            end={visibleItems.end}
          />
        </div>
      </div>
    </div>
  );
}

export default ResultsTracklist;
