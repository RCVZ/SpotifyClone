import React from 'react';
import './Button.css';


const Button = ({ type, buttonAction, name}) => {
  return (
    <React.Fragment>
      <button className="Button" type={type} onClick={buttonAction} >{name}</button>
    </React.Fragment>
  );
}

export default Button;
