import React from 'react'
import Infos from '../Infos'
import DosageAppContainer from '../DosageAppContainer'
import MessagesContainer from '../MessagesContainer'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='Dashboard'>
      <div>
        <Infos />
        <DosageAppContainer />
      </div>
      <MessagesContainer />
    </div>
  )
}

export default Dashboard