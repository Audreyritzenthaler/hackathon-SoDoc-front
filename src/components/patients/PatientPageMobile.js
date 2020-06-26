import React, { useState } from 'react';
import MessageContainerPatient from './MessagesContainerPatient'
import PostMessage from './PostMessage'
import logo from '../../logo.png'
import '../MessagesContainer.css'
import BurgerMenu from './BurgerMenuPatient'



const PatientPageMobile = () => {
  const [messagesFull, setMessages] = useState([])

  return (
    <div>
      <div>
        <div className='nav-responsive'>
          <img src={logo} alt='logo of feelback' style={{ marginLeft: '1rem', marginTop: '1rem', width: '4rem' }} />
          <BurgerMenu />
        </div>
      </div>
      <PostMessage messagesFull={messagesFull} setMessages={setMessages} />
      <MessageContainerPatient messagesFull={messagesFull} setMessages={setMessages} />
    </div>
  );
};

export default PatientPageMobile;