import React from 'react';
import './ActionOverlay.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const ActionOverlay = ({ trackAction, onPlayClick, inPlaylist }) => {
  return (
    <div className="Action-Overlay">
      <button className="play-pause" onClick={trackAction} >
        <FontAwesomeIcon className="button" icon={inPlaylist ? faMinus : faPlus} size="lg" />
      </button>
      <button className="play-pause" onClick={onPlayClick} >
        <FontAwesomeIcon className="button" icon={faPlay} size="lg" />
      </button>
    </div>
  )
}

export default ActionOverlay;