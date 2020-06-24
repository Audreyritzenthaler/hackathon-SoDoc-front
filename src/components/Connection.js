import React from 'react'
import { Link } from 'react-router-dom'

const Connection = () => {
    return(
        <div>
            <button>
                <Link to="/logbook">I'm a patient</Link>
            </button>
            <button>
                <Link to="/dashboard">I'm a practitioner</Link>
            </button>
        </div>
    )
}

export default Connection