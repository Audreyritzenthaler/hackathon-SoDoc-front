import React, { useState } from 'react'
import Modal from '../Modal'
import '../Messages.css'

const Messages = (props) => {
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

export default Messages

// import React, { useState } from 'react'

// import Modal from './Modal'

// import './LandingPage.css'

// const LandingPage = () => {
//   const [showModal, setShowModal] = useState(false)
//   const openModal = () => {
//     setShowModal(true)
//   }
//   const hideModal = () => {
//     setShowModal(false)
//   }
//   return (
//     <div className='landing-page'>
//       <div className='intro-register'>
//         <Modal show={showModal} handleClose={hideModal} />
//         <button className='intro-button' onClick={openModal}>S'INSCRIRE</button>
//       </div>
//     </div>
//   )
// }
// export default LandingPage