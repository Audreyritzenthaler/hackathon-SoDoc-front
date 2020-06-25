import React, { useState, useEffect } from 'react'
import Messages from './Messages'
import './MessagesContainer.css'
import axios from 'axios'

const MessagesContainer = () => {
//   const [messages, setMessages] = useState({
//     messagesFull: '',
//     messagesPreview: ''
// })
  const [messagesFull, setMessages ] = useState( [] )
  const [messagesPreview, setMessagesPreview ] = useState( [] )

  const fetchData = async () => {
    const result = await axios(
      'http://localhost:8080/api/patients/1/messages?doctorId=1',
    )
    const resultPreview = result.data.map(msg => {
      const preview = msg.message.substr(0, 200)
      const mood_status = msg.mood_status
      const creation_date = msg.creation_date
      return { preview, mood_status, creation_date }
    })
    setMessages(result.data)
    setMessagesPreview(resultPreview)
  };

  useEffect(() => {
      fetchData();
  }, []);

    return (
      <div className='MessagesContainer'>
        <h3 className='msg-container-title'>Story board</h3>
        <div className="scrollMessages">
          {
            messagesPreview.map((msg, i) =>
              <Messages key={i} mood={msg.mood_status} date={msg.creation_date.replace('T', ' ').substr(0, 19).split(' ').join(' à ')} messagesFull={messagesFull[i]} messagesPreview={messagesPreview[i]} />
            )
          }
        </div>
      </div>
    )
}

export default MessagesContainer