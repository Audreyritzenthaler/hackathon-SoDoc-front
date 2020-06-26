import React from 'react'

import './Modal.css'

const Modal = ({ handleClose, show, messagesFull }) => {
  console.log(messagesFull)
  return (
    <div className={show ? 'modal display-block' : 'modal display-none'}>
      <section className='modal-main'>
        <button className='close-button' onClick={handleClose}>X</button>
        <p>{messagesFull.message}</p>
        <div className='modal-details'>
          <p>Comment je me sens : {messagesFull.mood_status}</p>
          <p>{messagesFull.creation_date.replace('T', ' ').substr(0, 19).split(' ').join(' à ')}</p>
        </div>
      </section>
    </div>
  )
}

export default Modal