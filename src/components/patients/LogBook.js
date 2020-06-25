import React from 'react'
import Infos from '../Infos'
import DosageAppContainer from '../DosageAppContainer'
import MessagesContainerPatient from './MessagesContainerPatient'
import NavBar from '../NavBar'
import PostMessage from './PostMessage'
import './LogBook.css'
import BurgerMenuPatient from './BurgerMenuPatient'

const LogBook = () => {
  return (
    <div className='LogBook'>
      <div className='navbar-container'>
        <NavBar />
      </div>
      <BurgerMenuPatient />
      <div className='body'>
        <div className='container-left'>
          <Infos />
          <DosageAppContainer />
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