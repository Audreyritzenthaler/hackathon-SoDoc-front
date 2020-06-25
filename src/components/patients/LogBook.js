import React from 'react'
import Infos from '../Infos'
import DosageAppContainer from '../DosageAppContainer'
import MessagesContainer from '../MessagesContainer'
import './LogBook.css'

const LogBook = () => {
  return (
    <div className='LogBook'>
      <div>
        <Infos />
        <DosageAppContainer />
      </div>
      <MessagesContainer />
    </div>
  )
}

export default LogBook