import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause } from '@fortawesome/free-solid-svg-icons';

const PauseButton = ({ onPlayClick }) => {
  return (
    <React.Fragment>
      <button className="play-pause" onClick={onPlayClick} >
        <FontAwesomeIcon className="button" icon={faPause} size="lg" />
      </button>
    </React.Fragment>
  );
}

export default PauseButton;