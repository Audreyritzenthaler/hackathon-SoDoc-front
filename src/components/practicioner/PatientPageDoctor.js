import React, { useState } from 'react'
import DisplayPatient from './DisplayPatient'
import DosageAppContainerDoctor from './DosageAppContainerDoctor'
import MessagesContainerDoctor from './MessagesContainerDoctor'
import BurgerMenuPractitioner from './BurgerMenuPractitioner'
import './Dashboard.css'


import DosageAppContainerPatient from '../patients/DosageAppContainerPatient'
import MessagesContainerPatient from '../patients/MessagesContainerPatient'
import NavBarDoctor from './NavBarDoctor'
// import BurgerMenuPatient from './BurgerMenuPatient'
// import '../patients/LogBook.css'

const PatientPageDoctor = () => {
  const [messagesFull, setMessages] = useState([])

    return (
      // <div className='Dashboard'>
      //   <BurgerMenuPractitioner />
      //   <div>
      //     <DisplayPatient />
      //     <DosageAppContainerDoctor />
      //   </div>
      //   <MessagesContainerDoctor />
      // </div>
      
      <div className='Dashboard'>
      <div className='navbar-container'>
        <NavBarDoctor />
      </div>
      <BurgerMenuPractitioner />
      <div className='body-container'>
        <div className='container-left'>
          <DisplayPatient />
          <DosageAppContainerPatient />
        </div>
        <div>
          <MessagesContainerPatient messagesFull={messagesFull} setMessages={setMessages} />
        </div>
      </div>
    </div>
    )
  }


export default PatientPageDoctor