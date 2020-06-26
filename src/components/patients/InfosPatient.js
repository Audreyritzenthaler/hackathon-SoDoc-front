import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../Infos.css'

const InfosPatient = () => {
  const [doctors, setDoctors] = useState(null)

  const getPractitioner = () => {
    Axios.get('http://localhost:8080/api/doctors/1')
      .then((res) => setDoctors(res.data))
  }

  useEffect(() => getPractitioner(), [])

  return (doctors === null ? 'loading...' : (
    <div className='Infos'>

      {doctors.map((doctor, index) =>
        <div className='infos-details'>
          <i className="fas fa-user-circle" />
          <div className='infos-text'>
            <h3 style={{ marginBottom: '1rem' }}>My doctor</h3>
            <p className='infos-first-last-name'>{doctor.lastname.toUpperCase()} {doctor.firstname}</p>
            <p>{doctor.email}</p>
            <p>{doctor.phoneNumber}</p>
          </div>
        </div>
      )}
    </div>
  ))
}

export default InfosPatient
