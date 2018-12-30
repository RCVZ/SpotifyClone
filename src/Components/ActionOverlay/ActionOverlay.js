import React from 'react';
import './ActionOverlay.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

const ActionOverlay = ({ addToPlaylist, onPlayClick }) => {
  return (
    <div className="Action-Overlay">
      <button className="play-pause" onClick={addToPlaylist} >
        <FontAwesomeIcon className="button" icon={faPlus} size="lg" />
      </button>
      <button className="play-pause" onClick={onPlayClick} >
        <FontAwesomeIcon className="button" icon={faPlay} size="lg" />
      </button>
    </div>
  )
}

export default ActionOverlay;