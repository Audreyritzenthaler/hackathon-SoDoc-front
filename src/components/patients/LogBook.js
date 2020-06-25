import React from 'react'
import Infos from '../Infos'
import MessagesContainer from '../MessagesContainer'
import './LogBook.css'

const LogBook = () => {
    return (
        <div className='LogBook'>
            <Infos />
            <MessagesContainer />
        </div>
    )
}

export default LogBook