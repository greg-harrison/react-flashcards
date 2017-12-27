import React from 'react';
import './header.css'

const Header = ({ isLoggedIn }) => {
  return (
    isLoggedIn && < div className="header" >
      Header
      </div >
  )
}

export default Header;
