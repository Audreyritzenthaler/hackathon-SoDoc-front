import React from 'react'
import '../Infos.css'

const PatientList = ({ patient }) => {
    return (
        <div className='infos-details-doc'>
            <i className="fas fa-user-circle" />
            <div className='infos-text'>
                <p className='infos-first-last-name'>{patient.lastname.toUpperCase()} {patient.firstname}</p>
                <p>{patient.email}</p>
                <p>{patient.phoneNumber}</p>
            </div>
        </div>
    )
}

export default PatientList