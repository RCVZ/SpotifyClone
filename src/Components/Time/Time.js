import React from 'react';
import './Time.css';

const Time = ({ ms }) => {
  const trackTime = (ms) => {
    let minute, seconds, fullSeconds;
    seconds = Math.floor(ms / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    fullSeconds = `0${seconds}`.slice(-2);
      return `${minute}:${fullSeconds}`;
    }

    return (
        <div className="Time">
            {trackTime(ms)}
        </div>
    )
}

export default Time;


