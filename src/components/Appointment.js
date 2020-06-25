import React, { Component } from 'react'
import './Appointment.css'

class Appointment extends Component {
  render() {
    return (
      <div className='Appointment'>
        <h3>My appointments</h3>
        <div className='app-details'>
          <p>Date</p>
          <p>Heure</p>
        </div>
      </div>
    )
  }
}

export default Appointment