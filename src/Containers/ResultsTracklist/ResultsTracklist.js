import React, { useState, useContext, useCallback } from 'react';
import './ResultsTracklist.css';

import TrackList from '../../Components/TrackList/TrackList';
import Track from '../../Components/Track/Track';
import Header from '../../Components/Header/Header';
import Viewport from '../../Components/Viewport/Viewport';
import { ContextStore } from '../../Context/MainContext';


const ResultsTracklist = ({ history, loadMore }) => {
  const context = useContext(ContextStore);

  const [visibleItems, updateVisibility] = useState(() => ({ start: 0, end: 6 }));
  const [expanded, toggleExpand] = useState(() => false);
  const [scrollActive, activeScroll] = useState(() => false);

  const [scroll, updateScroll] = useState({
    offSet: 0,
    direction: 'down'
  });

  let timer = null;

  const handleToggleExpand = () => {
    if (history.location.pathname === '/search/tracks') {
      history.push('/search');
      toggleExpand(false);
      updateVisibility({ start: 0, end: 6 });
    } else {
      history.push('/search/tracks');
      toggleExpand(true);
      updateVisibility({ start: 0,  end: 20 });
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

  const renderNext = () => {
    if (!expanded) return

    activeScroll(true);
    clearTimeout(timer)
    timer = setTimeout(() => activeScroll(false), 1000);
    updateVisibility({ start: visibleItems.start + 2, end: visibleItems.end + 2 });

    if (context.tracks.length <= (visibleItems.end + 20)) {
      loadMore();
    }
  }

  const renderPrev = () => {
    if (!expanded || visibleItems.start === 0) return    

    activeScroll(true);
    clearTimeout(timer)
    timer = setTimeout(() => activeScroll(false), 1000);
    updateVisibility({ start: visibleItems.start - 2, end: visibleItems.end - 2 });
  }


  const scrollPosition = (e) => {
    scroll.offSet < e.target.scrollTop
      ? updateScroll({
        offSet: e.target.scrollTop,
        direction: 'down'
      })
      : updateScroll({
        offSet: e.target.scrollTop,
        direction: 'up'
      })

    if (context.tracks.length <= (start + 26)) {
      loadMore();
    }
    // if (e.target.scrollTop >= scrollTopPosition) {
    //   renderNext()
    //   updateScrollTopPosition(scrollTopPosition + 100);      
    // }

    // else if (e.target.scrollTop + 100 <= scrollTopPosition) {
    //   renderPrev()
    //   updateScrollTopPosition(scrollTopPosition - 100);      
    // }

  }

  const memoTracksWithPosition = useCallback(() => {
    let list = [...context.tracks];
    list.forEach((element, index) => {
      element['position'] = getPosition(index);
    });
    console.log('test')
    return list
  }, [context.tracks]);

  const start = Math.floor(scroll.offSet / 50);
  console.log(start)

  const test = memoTracksWithPosition().slice(start, start+20);
  const listHeight = (context.tracks.length * 50 + 100) +'px';


  return (
    <div className="ResultsTracklist">
      <Header name={expanded ? 'Less' : 'More' } buttonAction={handleToggleExpand}>Tracks</Header>
      <Viewport scrollPosition={scrollPosition} renderNext={renderNext} renderPrev={renderPrev} style={{ height: expanded ? '700px' : '350px' }} >
        <div className="list" style={{ height: listHeight, pointerEvents: scrollActive ? 'none': 'auto' }}>
            {
              test.map((track, index) => {
                return (
                  <Track
                    index={index}
                    track={track}
                    key={track.id}
                  />
                )
              })
            }
        </div>
      </Viewport>
    </div>
  );
}

export default ResultsTracklist;



  // const scrollPosition = (e) => {
  //   if (!expanded) return

  //   activeScroll(true);
  //   clearTimeout(timer)
  //   timer = setTimeout(() => activeScroll(false), 66);

  //   if (e.target.scrollTop >= scrollTopPosition) {
  //     updateVisibility({ start: visibleItems.start + 2, end: visibleItems.end + 2 });
  //     updateScrollTopPosition(scrollTopPosition + 100);
  //     //console.log(scrollTopPosition);
  //   }

  //   else if ((e.target.scrollTop + 100) <= scrollTopPosition) {
  //     updateVisibility({ start: visibleItems.start - 2, end: visibleItems.end - 2 });
  //     updateScrollTopPosition(scrollTopPosition - 100);
  //   }

  //   if (context.tracks.length <= (visibleItems.end + 6)) {
  //     loadMore();
  //   }
  // }
