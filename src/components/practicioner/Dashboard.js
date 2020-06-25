import React from 'react'
import Infos from '../Infos'
import MessagesContainer from '../MessagesContainer'
import './Dashboard.css'
import BurgerMenuPractitioner from './BurgerMenuPractitioner'

const Dashboard = () => {
  return (
    <div className='Dashboard'>
      <BurgerMenuPractitioner />
      <div className='dash-info-container'>
        <h3 className='dash-title'>Mes patients</h3>
        <div className='dash-input-container'>
          <input type='text' className='dash-input' />
          {/* <button className='dash-button'>Search</button> */}
        </div>
        <Infos />
      </div>
      <MessagesContainer />
    </div>
  )
}

export default Dashboard