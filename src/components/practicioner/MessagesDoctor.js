import React, { useState } from 'react'
import ModalDoctor from './ModalDoctor'
import '../Messages.css'

const MessagesDoctor = (props) => {
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
      <ModalDoctor show={showModal} handleClose={hideModal} messagesFull={props.messagesFull} />
      <div className='msg-details'>
        <p className='msg-small'>Comment je me sens : {props.mood}</p>
        <p className='msg-small'>{props.date}</p>
      </div>
    </div>
  )
}

export default MessagesDoctor