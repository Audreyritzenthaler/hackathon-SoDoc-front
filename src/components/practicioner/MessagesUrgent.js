import React, { useState } from 'react'
import Modal from '../patients/ModalPatient'
import '../Messages.css'

const MessagesUrgent = (props) => {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(true)
  }
  const hideModal = () => {
    setShowModal(false)
  }
  return (
    <div className='Messages'>
      <p>{props.messagesPreview.preview}</p><button className="readMore" onClick={openModal}>... read more</button>
      <Modal show={showModal} handleClose={hideModal} messagesFull={props.messagesFull} />
      <div className='msg-details'>
        <p className='msg-small'>Comment je me sens : {props.mood}</p>
        <p className='msg-small'>{props.date}</p>
      </div>
    </div>
  )
}

export default MessagesUrgent