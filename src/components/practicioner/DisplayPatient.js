import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../Infos.css'

const DisplayPatient = ({idPatient}) => {
  const [patient, setPatient] = useState(null)
  const getPatient = () => {
    Axios.get(`http://localhost:8080/api/doctors/1/patients/${idPatient}`)
      .then((res) => setPatient(res.data))
  }

  useEffect(() => getPatient(), [])
  
  return (patient === null ? 'loading...' : (
    <div className='Infos'>
      {patient.map((patient, index) => 
      <div className='infos-details'>
      <i className="fas fa-user-circle" />
      <div className='infos-text'>
          <p className='infos-first-last-name'>{patient.lastname.toUpperCase()} {patient.firstname}</p>
          <p>{patient.email}</p>
          <p>{patient.phoneNumber}</p>
      </div>
    </div>
      )}
    </div>
    ))
}

export default DisplayPatient