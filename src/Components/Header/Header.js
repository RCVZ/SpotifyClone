import React,{ memo } from 'react';
import './Header.css';
import Title from '../Title/Title';
import Button from '../Buttons/Button/Button';
import Border from '../Border/Border';

const areEqual = (prevProps, nextProps) => {
  return true
}

const Header = memo(({ children, buttonAction, name }) => {
  return (
    <div className="Header" >
      <Title>{children}</Title>
      <Button type="button" buttonAction={buttonAction} name={name} />
      <Border />
    </div>
    )
}, areEqual)

export default Header;