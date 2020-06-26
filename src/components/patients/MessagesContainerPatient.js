import React, { useEffect } from 'react'
import Messages from './MessagesPatient'
import '../MessagesContainer.css'
import axios from 'axios'

const MessagesContainerPatient = ({ setMessages, messagesFull }) => {

  const fetchData = async () => {
    const result = await axios(
      'http://localhost:8080/api/patients/1/messages?doctorId=1',
    )
    setMessages(result.data)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='MessagesContainer'>
      <h3 className='msg-container-title'>Story board</h3>
      <div className="scrollMessages">
        {
          messagesFull.map((msg, i) =>
            <Messages key={i} mood={msg.mood_status} date={msg.creation_date.replace('T', ' ').substr(0, 19).split(' ').join(' à ')} messagesFull={messagesFull[i]} />
          )
        }
      </div>
    </div>
  )
}

export default MessagesContainerPatient