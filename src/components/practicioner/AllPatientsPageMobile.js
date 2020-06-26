import React, { useState } from 'react';
import InfosDoctor from './InfosDoctor'
import BurgerMenu from './BurgerMenuPractitioner'
import logo from '../../logo.png'

const AllPatientsPageMobile = () => {
  const [filterName, setFilterName] = useState('')
  return (
    <div className='Dashboard'>
      <div className='nav-responsive'>
        <img src={logo} alt='logo of feelback' style={{ marginLeft: '1rem', marginTop: '1rem', width: '4rem' }} />
        <BurgerMenu />
      </div>
      <div className=' body-container'>
        <div className='dash-info-container'>
          <h3 className='dash-title'>Mes patients</h3>
          <div className='dash-input-container'>
            <input type='text' value={filterName} onChange={(e) => setFilterName(e.target.value)} className='dash-input' />
          </div>
          <InfosDoctor filterName={filterName} />
        </div>
      </div>
    </div>
  );
};

export default AllPatientsPageMobile;