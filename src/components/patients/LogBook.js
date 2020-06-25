import React from 'react'
import Infos from '../Infos'
import DosageAppContainer from '../DosageAppContainer'
import MessagesContainer from '../MessagesContainer'
import PostMessage from './PostMessage'
import './LogBook.css'
import BurgerMenuPatient from './BurgerMenuPatient'

const LogBook = () => {
  return (
    <div className='LogBook'>
      <BurgerMenuPatient />
      <div>
        <Infos />
        <DosageAppContainer />
      </div>
      <div>
        <PostMessage />
        <MessagesContainer />
      </div>

    </div>
  )
}

export default LogBook