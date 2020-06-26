import React, { Component } from 'react';
import Logo from '../../logo.png'
import '../NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <div className='NavBar'>
        <img src={Logo} alt='logo of feelback app' className='logo-app' />
        <div className='navbar-menu'>
          <a className='navbar-link'>My informations</a>
          <a className='navbar-link'>Logout</a>
        </div>
      </div>
    );
  }
}

export default NavBar;