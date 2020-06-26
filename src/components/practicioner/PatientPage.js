import React, { Component } from 'react'
import InfosDoctor from './InfosDoctor'
import DosageAppContainer from '../DosageAppContainer'
import MessagesContainer from '../MessagesContainer'
import BurgerMenuPractitioner from './BurgerMenuPractitioner'
import './Dashboard.css'

class PatientPage extends Component {
  render() {
    return (
      <div className='Dashboard'>
        <BurgerMenuPractitioner />
        <div>
          <InfosDoctor />
          <DosageAppContainer />
        </div>
        <MessagesContainer />
      </div>
    )
  }
}

export default PatientPage