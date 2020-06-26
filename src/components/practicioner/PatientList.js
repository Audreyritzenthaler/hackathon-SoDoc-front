import React from 'react'
import '../Infos.css'

const PatientList = ({ patients }) => {
    return (
        <div className='infos-details-doc'>
            <i className="fas fa-user-circle" />
            <div className='infos-text'>
                <p className='infos-first-last-name'>{patients.lastname.toUpperCase()} {patients.firstname}</p>
                <p>{patients.email}</p>
                <p>{patients.phoneNumber}</p>
            </div>
        </div>
    )
}

export default PatientList