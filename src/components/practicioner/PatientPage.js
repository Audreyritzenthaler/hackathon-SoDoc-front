import React, { Component } from 'react'
import InfosDoctor from './InfosDoctor'
import DosageAppContainerDoctor from './DosageAppContainerDoctor'
import MessagesContainerDoctor from './MessagesContainerDoctor'
import './Dashboard.css'
import BurgerMenuPractitioner from './BurgerMenuPractitioner'

class PatientPageDoctor extends Component {
  render() {
    return (
      <div className='Dashboard'>
        <BurgerMenuPractitioner />
        <div>
          <InfosDoctor />
          <DosageAppContainerDoctor />
        </div>
        <MessagesContainerDoctor />
      </div>
    )
  }
}

export default PatientPageDoctor