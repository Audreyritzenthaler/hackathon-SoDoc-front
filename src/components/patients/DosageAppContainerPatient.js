import React, { Component } from 'react'
import DosagePatient from './DosagePatient'
import AppointmentPatient from './AppointmentPatient'
import '../DosageAppContainer.css'

class DosageAppContainerPatient extends Component {
  render() {
    return (
      <div className='DosageAppContainer'>
        <DosagePatient />
        <AppointmentPatient />
      </div>
    )
  }
}

export default DosageAppContainerPatient