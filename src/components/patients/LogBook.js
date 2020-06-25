import React from 'react'
import Infos from '../Infos'
import MessagesContainer from '../MessagesContainer'
import './LogBook.css'
import BurgerMenuPatient from './BurgerMenuPatient'

const LogBook = () => {
    return (
        <div className='LogBook'>
            <BurgerMenuPatient />
            <Infos />
            <MessagesContainer />
        </div>
    )
}

export default LogBook