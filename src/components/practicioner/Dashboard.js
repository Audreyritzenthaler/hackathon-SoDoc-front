import React, { useState } from 'react'
import InfosDoctor from './InfosDoctor'
import MessagesContainerUrgent from './MessagesContainerUrgent'
import NavBarDoctor from './NavBarDoctor'
import './Dashboard.css'
import BurgerMenuPractitioner from './BurgerMenuPractitioner'

const Dashboard = () => {
  const [filterName, setFilterName] = useState('')
  return (
    <div className='Dashboard'>
      <div className='nav-bar-container'>
        <NavBarDoctor />
      </div>
      <BurgerMenuPractitioner />
      <div className=' body-container'>
        <div className='dash-info-container'>
          <h3 className='dash-title'>Mes patients</h3>
          <div className='dash-input-container'>
            <input type='text' value={filterName} onChange={(e) => setFilterName(e.target.value)} className='dash-input' />
          </div>
          <InfosDoctor />
        </div>
        <MessagesContainerUrgent />
      </div>
    </div>
  )
}

export default Dashboard