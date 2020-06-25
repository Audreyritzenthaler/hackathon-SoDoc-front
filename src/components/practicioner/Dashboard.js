import React from 'react'
import Infos from '../Infos'
import MessagesContainer from '../MessagesContainer'
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className='Dashboard'>
            <Infos />
            <MessagesContainer />
        </div>
    )
}

export default Dashboard