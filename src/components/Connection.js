import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import './Connection.css'

const Connection = () => {
    const [loginForm, setLoginForm] = useState({
        mail: '',
        pwd: ''
    })
    const [failed, setFailed] = useState()
    const [success, setSuccess] = useState()

    const getLogin = (e) => {
        const logCatch = e.target.value
        setLoginForm({ ...loginForm, mail: logCatch })
    }

    const getPwd = (e) => {
        const pwdCatch = e.target.value
        setLoginForm({ ...loginForm, pwd: pwdCatch })
    }

    const getApi = (e) => {
        axios({
            method: 'post',
            url: 'http://localhost:8080/api/authentification',
            data: {
                ...loginForm
            }
        })
            .then(() => {
                setSuccess(true)
            })
            .catch(() => {
                setFailed(true)
            })
    }

    return (
        <div>
            <button>
                <Link to="/practitioner/messages">I'm a practitioner</Link>
            </button>

            <form className="form">
                <label className='connexion-label' for="eMail">eMail :</label>
                <input className='connexion-input' id="eMail" type="text" onChange={getLogin} placeholder="Enter your adress mail"></input>
                <label className='connexion-label' for="pwd">Password :</label>
                <input className='connexion-input' id="pwd" type="text" onChange={getPwd} placeholder="Enter your password"></input>
                {failed ? <p className='incorrect'>Your login or your password is incorrect !</p> : ""}
                {success ? <Redirect to="/logbook" /> : ""}
                <button className='connexion-button' id="button" onClick={getApi}><Link to path="/logbook">Sign In</Link></button>
            </form>
        </div>
    )
}

export default Connection