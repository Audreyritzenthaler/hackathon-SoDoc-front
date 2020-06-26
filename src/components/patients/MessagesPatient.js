import React, { useState } from 'react'
import ModalPatient from './ModalPatient'
import '../Messages.css'

const MessagesPatient = (props) => {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(true)
  }
  const hideModal = () => {
    setShowModal(false)
  }
  return (
    <div className='Messages'>
      <p>{props.messagesFull.message.substr(0, 200)}...<button className="readMore" onClick={openModal}>read more</button></p>
      <ModalPatient show={showModal} handleClose={hideModal} messagesFull={props.messagesFull} />
      <div className='msg-details'>
        <p className='msg-small'>How I feel : {props.mood}</p>
        <p className='msg-small'>{props.date}</p>
      </div>
    </div>
  )
}

export default MessagesPatient