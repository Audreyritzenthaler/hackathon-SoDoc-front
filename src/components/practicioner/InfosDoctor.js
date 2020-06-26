import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import PatientsList from './PatientList'
import '../Infos.css'

const InfosDoctor = ({ filterName }) => {
  const [patients, setPatients] = useState(null)

  const getPatientByPratitioner = () => {
    Axios.get('http://localhost:8080/api/doctors/1/patients')
      .then((res) => setPatients(res.data))
  }

  useEffect(() => getPatientByPratitioner(), [])

  return (patients === null ? 'Loading...' : (console.log(patients) ||
    <div>
      {patients
      .filter(patient => patient.lastname.toLowerCase().startsWith(filterName.toLowerCase()))
      .filter(Boolean)
      .map(patient => 
      <PatientsList patient={patient} />
      )}
    </div>
  )
  )
}

export default InfosDoctor
