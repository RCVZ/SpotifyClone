import React from 'react';
import './Time.css';

const Time = ({ ms }) => {
  const trackTime = (ms) => {
        let minute, seconds;
        seconds = Math.floor(ms / 1000);
        minute = Math.floor(seconds / 60);
        seconds = seconds % 60;
        return `${minute}:${seconds}`;
    }
    return (
        <div className="Time">
            {trackTime(ms)}
        </div>
    )
}

export default Time;


