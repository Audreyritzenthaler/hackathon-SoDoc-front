import React, { Component } from 'react'
import Dosage from './Dosage'
import Appointment from './Appointment'
import './DosageAppContainer.css'

class DosageAppContainer extends Component {
  render() {
    return (
      <div className='DosageAppContainer'>
        <Dosage />
        <Appointment />
      </div>
    )
  }
}

export default DosageAppContainer