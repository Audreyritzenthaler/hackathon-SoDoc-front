import React from 'react'
import InfosPatient from './InfosPatient'
import DosageAppContainerPatient from './DosageAppContainerPatient'
import MessagesContainerPatient from './MessagesContainerPatient'
import NavBarPatient from './NavBarPatient'
import PostMessage from './PostMessage'
import './LogBook.css'
import BurgerMenuPatient from './BurgerMenuPatient'

const LogBook = () => {
  return (
    <div className='LogBook'>
      <div className='navbar-container'>
        <NavBarPatient />
      </div>
      <BurgerMenuPatient />
      <div className='body-container'>
        <div className='container-left'>
          <InfosPatient />
          <DosageAppContainerPatient />
        </div>
        <div>
          <PostMessage />
          <MessagesContainerPatient />
        </div>
      </div>
    </div>
  )
}

export default LogBook