import React from 'react'
import '../Infos.css'
import { Link } from 'react-router-dom'

const PatientList = ({ patient }) => {
    return (
        <div className='infos-details-doc'>
            <i className="fas fa-user-circle" />
            <div className='infos-text'>
                <Link to={`/dashboard/patient/${patient.id}`}>
                    <p className='infos-first-last-name'>{patient.lastname.toUpperCase()} {patient.firstname}</p>
                </Link>
                <p>{patient.email}</p>
                <p>{patient.phoneNumber}</p>
            </div>
        </div>
    )
}

export default PatientList