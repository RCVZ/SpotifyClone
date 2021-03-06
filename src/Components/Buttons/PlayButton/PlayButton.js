import React from 'react';
import './PlayButton.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const PlayButton = ({ onPlayClick }) => {
  return (
    <React.Fragment>
      <button className="play-pause" onClick={onPlayClick} >
        <FontAwesomeIcon className="button" icon={faPlay} size="lg" />
      </button>
    </React.Fragment>
  );
}

export default PlayButton;