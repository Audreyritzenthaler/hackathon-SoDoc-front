import React, { Component } from 'react';
import Logo from '../logo.svg'
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <div className='NavBar'>
        <img src={Logo} />
        <p>My informations</p>
        <p>Logout</p>
        <button>Emergency</button>
      </div>
    );
  }
}

export default NavBar;