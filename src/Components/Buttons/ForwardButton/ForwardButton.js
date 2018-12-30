import React from 'react';
import './ForwardButton.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';

const ForwardButton = ({ onForward }) => {
  return (
    <React.Fragment>
      <button className="forward" onClick={onForward} >
        <FontAwesomeIcon className="button" icon={faForward} size="sm" />
      </button>
    </React.Fragment>
  );
}

export default ForwardButton;