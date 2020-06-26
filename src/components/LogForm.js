import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import './Connection.css'

const LogPractitioner = (props) => {
    return (
        <div>
            <form className="form">
                <h2 className="titleLog">Log to my {props.switch}</h2>
                <label className='connexion-label' for="eMail"><i class="far fa-envelope"></i></label>
                <input className='connexion-input' id="eMail" type="text" onChange={props.getLogin} placeholder="mail"></input>
                <span class="underline"></span>
                <label className='connexion-label' for="pwd"><i class="fas fa-unlock-alt"></i></label>
                <input className='connexion-input' id="pwd" type="password" onChange={props.getPwd} placeholder="password"></input>
                {props.failed ? <p className='incorrect'>Your login or your password is incorrect !</p> : ""}
                {props.success ? <Redirect to="/logbook" /> : ""}
                <button className='connexion-button' id="button" onClick={props.getApi}><Link to path="/logbook" className="logLink">Sign In</Link></button>
            </form>
        </div>
    )
}

export default LogPractitioner