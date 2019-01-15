import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

const AddButton = ({ onOpen }) => {
  return (
    <React.Fragment>
      <button className="AddButton" onClick={onOpen} >
        <FontAwesomeIcon className="button" icon={faBoxOpen} size="lg" />
      </button>
    </React.Fragment>
  );
}

export default AddButton;