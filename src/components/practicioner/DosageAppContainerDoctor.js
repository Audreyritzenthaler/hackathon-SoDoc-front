import React, { Component } from 'react'
import DosageDoctor from './DosageDoctor'
import AppointmentDoctor from './AppointmentDoctor'
import '../DosageAppContainer.css'

class DosageAppContainerDoctor extends Component {
  render() {
    return (
      <div className='DosageAppContainer'>
        <DosageDoctor />
        <AppointmentDoctor />
      </div>
    )
  }
}

export default DosageAppContainerDoctor