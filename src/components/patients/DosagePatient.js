import React, { Component } from 'react'
import '../Dosage.css'

class DosagePatient extends Component {
  render() {
    return (
      <div className='Dosage'>
        <h3>My dosages</h3>
        <div className='dosage-details'>
          <p>Nom du médicament</p>
          <p>Posologie</p>
          <p>Durée du traitement</p>
        </div>
      </div>
    )
  }
}

export default DosagePatient