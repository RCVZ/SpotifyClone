import React from 'react';
import './ResultContainer.css';

const ResultContainer = ({children}) => {
  return (
    <div className="ResultContainer">
      {children}
    </div>
  );
}

export default ResultContainer;