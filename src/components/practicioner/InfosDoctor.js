import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import PatientsList from './PatientList'
import '../Infos.css'


const InfosDoctor = () => {
  const [patients, setPatients] = useState(null)

  const getPatientByPratitioner = () => {
    Axios.get('http://localhost:8080/api/doctors/1/patients')
      .then((res) => setPatients(res.data))
  }

  useEffect(() => getPatientByPratitioner(), [])

  return (patients === null ? 'Loading...' : (
    <div>
      {patients.map((patient, index) => <PatientsList patients={patients[index]} />)}
    </div>
  )
  )
}

export default InfosDoctor
