import React from 'react';
import './AddButton.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddButton = ({ onAdd }) => {
  return (
    <React.Fragment>
      <button className="AddButton" onClick={onAdd} >
        <FontAwesomeIcon className="button" icon={faPlus} size="lg" />
      </button>
    </React.Fragment>
  );
}

export default AddButton;