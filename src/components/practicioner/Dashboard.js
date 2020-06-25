import React from 'react'
import Infos from '../Infos'
import MessagesContainer from '../MessagesContainer'
import './Dashboard.css'
import BurgerMenuPractitioner from './BurgerMenuPractitioner'

const Dashboard = () => {
    return (
        <div className='Dashboard'>
            <BurgerMenuPractitioner />
            <Infos />
            <MessagesContainer />
        </div>
    )
}

export default Dashboard