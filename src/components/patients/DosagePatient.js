import React, { Component } from 'react'
import logo from '../../logo.png'
import BurgerMenu from './BurgerMenuPatient'
import '../Dosage.css'

class DosagePatient extends Component {
  render() {
    return (
      <div>
        <div className='nav-responsive'>
          <img src={logo} alt='logo of feelback' style={{ marginLeft: '1rem', marginTop: '1rem', width: '4rem' }} />
          <BurgerMenu />
        </div>
        <div className='Dosage'>
          <h3>My dosages</h3>
          <div className='dosage-details'>
            <p>Nom du médicament</p>
            <p>Posologie</p>
            <p>Durée du traitement</p>
          </div>
        </div>
      </div>
    )
  }
}

export default DosagePatient