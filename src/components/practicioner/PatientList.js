import React from 'react'
import { Link } from 'react-router-dom'


const PatientList = ({ patients }) => {
    return (
        <div className='infos-details'>
            <i className="fas fa-user-circle" />
            <div className='infos-text'>
                <Link to={`/dashboard/patient/${patients.id}`}>
                    <p className='infos-first-last-name'>{patients.lastname.toUpperCase()} {patients.firstname}</p>
                </Link>
                <p>{patients.email}</p>
                <p>{patients.phoneNumber}</p>
            </div>
        </div>
    )
}

export default PatientList