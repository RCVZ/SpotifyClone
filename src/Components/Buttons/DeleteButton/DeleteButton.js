import React from 'react';
import './DeleteButton.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const DeleteButton = ({ onDelete }) => {
  return (
    <React.Fragment>
      <button className="DeleteButton" onClick={onDelete} >
        <FontAwesomeIcon className="button" icon={faMinus} size="lg" />
      </button>
    </React.Fragment>
  );
}

export default DeleteButton;