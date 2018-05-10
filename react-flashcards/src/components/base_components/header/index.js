import React from 'react';
import './header.css'

const Header = ({ isLoggedIn, children }) => {
  return (
    isLoggedIn &&
    <div className="header">
      {children}
    </div>
  )
}

export default Header;
