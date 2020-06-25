import React, { Component } from 'react'
import Infos from '../Infos'
import DosageAppContainer from '../DosageAppContainer'
import MessagesContainer from '../MessagesContainer'
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
        <MessagesContainer />
      </div>
    )
  }
}

export default PatientPage