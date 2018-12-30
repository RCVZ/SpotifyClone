import React from 'react';
import './PauseButton.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause } from '@fortawesome/free-solid-svg-icons';

const PlayButton = ({ onPlayClick }) => {
  return (
    <React.Fragment>
      <button className="play-pause" onClick={onPlayClick} >
        <FontAwesomeIcon className="button" icon={faPause} size="lg" />
      </button>
    </React.Fragment>
  );
}

export default PlayButton;