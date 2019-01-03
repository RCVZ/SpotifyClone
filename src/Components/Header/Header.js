import React from 'react';
import './Header.css';
import Title from '../Title/Title';
import Button from '../Buttons/Button/Button';
import Border from '../Border/Border';

const Header = ({ children, buttonAction, state }) => {
  return (
    <div className="Header" >
      <Title>{children}</Title>
      <Button type="button" buttonAction={buttonAction} name={state} />
      <Border />
    </div>
  );
}

export default Header;