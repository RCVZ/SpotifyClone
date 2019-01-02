import React from 'react';
import './Title.css';

const Title = ({ children }) => {
  return (
    <div className="Title" >
      {children}
    </div>
  );
}

export default Title;