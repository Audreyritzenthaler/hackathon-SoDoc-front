import React, { useState } from 'react'
import DisplayPatient from './DisplayPatient'
import BurgerMenuPractitioner from './BurgerMenuPractitioner'
import DosageAppContainerPatient from '../patients/DosageAppContainerPatient'
import MessagesContainerPatient from '../patients/MessagesContainerPatient'
import NavBarDoctor from './NavBarDoctor'

import './Dashboard.css'

const PatientPageDoctor = (props) => {
  const [messagesFull, setMessages] = useState([])
  const idPatient = props.match.params.id

    return (
      <div className='Dashboard'>
      <div className='navbar-container'>
        <NavBarDoctor />
      </div>
      <BurgerMenuPractitioner />
      <div className='body-container'>
        <div className='container-left'>
            <DisplayPatient idPatient={idPatient}/>
          <DosageAppContainerPatient />
        </div>
        <div>
          <MessagesContainerPatient messagesFull={messagesFull} setMessages={setMessages} idPatient={idPatient}/>
        </div>
      </div>
    </div>
    )
  }

export default PatientPageDoctor