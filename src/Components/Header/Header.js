import React from 'react';
import './Header.css';
import Title from '../Title/Title';
import Button from '../Buttons/Button/Button';
import Border from '../Border/Border';

const Header = ({ children, buttonAction, name }) => {
  return (
    <div className="Header" >
      <Title>{children}</Title>
      <Button type="button" buttonAction={buttonAction} name={name} />
      <Border />
    </div>
  );
}

export default Header;