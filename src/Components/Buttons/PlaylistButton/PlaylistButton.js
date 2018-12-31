import React from 'react';
import './PlaylistButton.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';

const PlaylistButton = ({ togglePlaylist }) => {
  return (
    <React.Fragment>
      <button className="Playlist-Button" >
        <FontAwesomeIcon icon={faListUl} onClick={togglePlaylist} />  
      </button>
    </React.Fragment>
  );
}

export default PlaylistButton;