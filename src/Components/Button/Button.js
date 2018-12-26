import React, { PureComponent } from 'react';
import './Button.css';


const Button = ({ type, onClick, name}) => {
  return (
    <React.Fragment>
      <button className="Button" type={type} onClick={onClick} >{name}</button>
    </React.Fragment>
  );
}

export default Button;
