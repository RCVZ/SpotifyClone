import React, { useState, useEffect, useCallback } from 'react';
import './TrackProgression.css';

import ProgressionBar from '../../Components/ProgressionBar/ProgressionBar';
import Time from '../../Components/Time/Time';

const TrackProgression = ({ playing, duration, player, basePosition }) => {

  const [position, setPosition] = useState(basePosition);
  const [timer, setTimer] = useState(null);

  const getPlayerCurrentstate = useCallback(() => {
    if (!playing) {
      return
    }

    player.getCurrentState()
    .then((state) => {
      setPosition(state.position)
    });
    
  }, [playing]);

  useEffect(
    () => {
      if (playing) {
        setTimer(setInterval(() => getPlayerCurrentstate(), 500));
      } else {
        setTimer(clearInterval(timer));
      }           
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
