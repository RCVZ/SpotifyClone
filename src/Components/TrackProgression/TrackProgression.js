import React, { useState, useEffect, useCallback } from 'react';
import './TrackProgression.css';

import ProgressionBar from '../../Components/ProgressionBar/ProgressionBar';
import Time from '../../Components/Time/Time';

const TrackProgression = ({ playing, duration, onSeek, handleMouseUp, player }) => {

  let getPlayerStateTimer;

  const [position, setPosition] = useState(0);

  const getPlayerCurrentstate = useCallback(() => {
    player.getCurrentState()
    .then((state) => {
      setPosition(state.position)
    });
  },[])

  // const setTimer = useCallback( () => {
  //   playing ? getPlayerStateTimer = setInterval( getPlayerCurrentstate(), 1000) : clearInterval(getPlayerStateTimer);
  // }, [playing])

  useEffect(
    () => {
      getPlayerStateTimer = setInterval( () => getPlayerCurrentstate(), 1000);
      return () => {
        clearInterval(getPlayerStateTimer);
      };
    },
    [playing],
  );

  return (
    <div className="Track-Progression" >
      <Time ms={position} />
      <div className="Track-Bar">
        <ProgressionBar currentPostion={position} sliderAction={onSeek} maxValue={duration} handleMouseUp={handleMouseUp} />
      </div>
      <Time ms={duration} />
    </div>
  );
}

export default TrackProgression;
