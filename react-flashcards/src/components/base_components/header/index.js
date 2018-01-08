import React from 'react';
import './header.css'

const Header = ({ isLoggedIn }) => {
  return (
    isLoggedIn &&
    <div className="header">
      <span>
        Header
      </span>
    </div >
  )
}

export default Header;
