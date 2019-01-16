import React, { useState, useEffect } from 'react';
import './TrackProgression.css';

import ProgressionBar from '../../Components/ProgressionBar/ProgressionBar';
import Time from '../../Components/Time/Time';

const TrackProgression = ({ playing, duration, onSeek, handleMouseUp, player }) => {

  const [position, setPosition] = useState(0)

  let getPlayerStateTimer = null;

  const getPlayerCurrentstate = () => {
    player.getCurrentState()
    .then((state) => {
      setPosition(state.position)
    });
  }  

  // const setTimer = useCallback( () => {
  //   playing ? getPlayerStateTimer = setInterval( getPlayerCurrentstate(), 1000) : clearInterval(getPlayerStateTimer);
  // }, [playing]) 

  useEffect(() => {
    playing ? getPlayerStateTimer = setInterval(getPlayerCurrentstate(), 1000) : clearInterval(getPlayerStateTimer);
     
    return () => {
      clearInterval(getPlayerStateTimer);
    };
  });



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