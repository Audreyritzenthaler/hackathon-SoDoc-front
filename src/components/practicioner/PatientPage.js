import React, { Component } from 'react'
import Infos from '../Infos'
import DosageAppContainer from '../DosageAppContainer'
import MessagesContainerDoctor from './MessagesContainerDoctor'
import './Dashboard.css'
import BurgerMenuPractitioner from './BurgerMenuPractitioner'

class PatientPage extends Component {
  render() {
    return (
      <div className='Dashboard'>
        <BurgerMenuPractitioner />
        <div>
          <Infos />
          <DosageAppContainer />
        </div>
        <MessagesContainerDoctor />
      </div>
    )
  }
}

export default PatientPage