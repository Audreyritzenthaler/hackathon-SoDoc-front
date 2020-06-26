import React, { Component } from 'react'
import '../Appointment.css'
import BurgerMenu from './BurgerMenuPatient'
import logo from '../../logo.png'

class AppointmentPatient extends Component {
  render() {
    return (
      <div>
        <div className='nav-responsive'>
          <img src={logo} alt='logo of feelback' style={{ marginLeft: '1rem', marginTop: '1rem', width: '4rem' }} />
          <BurgerMenu />
        </div>
        <div className='Appointment'>
          <h3>My appointments</h3>
          <div className='app-details'>
            <p>Date</p>
            <p>Hour</p>
          </div>
        </div>
      </div>
    )
  }
}

export default AppointmentPatient