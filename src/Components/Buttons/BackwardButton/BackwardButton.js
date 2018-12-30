import React from 'react';
import './BackwardButton.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

const BackwardButton = ({ onBackward }) => {
  return (
    <React.Fragment>
      <button className="back" onClick={onBackward} >
        <FontAwesomeIcon className="button" icon={faBackward} size="sm" />
      </button>
    </React.Fragment>
  );
}

export default BackwardButton;