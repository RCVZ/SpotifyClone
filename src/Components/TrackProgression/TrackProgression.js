import React, { useState, useEffect, useCallback } from 'react';
import './TrackProgression.css';

import ProgressionBar from '../../Components/ProgressionBar/ProgressionBar';
import Time from '../../Components/Time/Time';

const TrackProgression = ({ playing, duration, player, basisPostion }) => {

  const [position, setPosition] = useState(() => basisPostion);
  const [timer, setTimer] = useState(() => null);

  const getPlayerCurrentstate = useCallback(() => {
    player.getCurrentState()
    .then((state) => {
      setPosition(state.position)
    });
  },[]);

  useEffect(
    () => {
      setTimer(setInterval( () => getPlayerCurrentstate(), 500));
      return () => {
        setTimer(clearInterval(timer));
      };
    },
    [playing],
  );

  const onSeek = (e) => {
    setTimer(clearInterval(timer));
    setPosition(e.target.value);
  }

  const handleMouseUp = (e) => {
    player.seek(position)
    .then(() => {
      setTimer(setInterval(() => getPlayerCurrentstate(), 500));
    });
  }

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
