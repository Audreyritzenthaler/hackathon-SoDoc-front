import React, { useState, useEffect } from 'react'
import '../MessagesContainer.css'
import axios from 'axios'
import MessagesUrgent from './MessagesUrgent'
import logo from '../../logo.png'
import BurgerMenu from './BurgerMenuPractitioner'

const MessagesContainerUrgent = () => {
  const [messagesList, setMessagesList] = useState([])

  const fetchData = async () => {
    const result = await axios(
      'http://localhost:8080/api/doctors/1/messages',
    )
    const numberOfMessages = result.data.reduce((obj, v) => {
      obj[v.id] = (obj[v.id] || 0) + 1
      return obj
    }, {})

    const keysSorted = Object.keys(numberOfMessages).sort((a, b) => { return numberOfMessages[b] - numberOfMessages[a] }).map(key => {
      const NbMessages = numberOfMessages[key]
      const id = key
      return { id, NbMessages }
    })

    const sortPerPatient = keysSorted.map(patient => {
      const msgTab = result.data.map(msg => msg.id === Number(patient.id) ? msg : null).filter(Boolean)
      return msgTab
    })
    const lastMessages = sortPerPatient.map(msgs => msgs[0])

    const finalData = keysSorted.map(id => {
      const total = lastMessages.map(msg => {
        if (msg.id === Number(id.id)) {
          msg.totalMessages = id.NbMessages
          return msg
        }
      })
      return total.filter(Boolean)
    })
    setMessagesList(finalData)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className='nav-responsive'>
        <img src={logo} alt='logo of feelback' style={{ marginLeft: '1rem', marginTop: '1rem', width: '4rem' }} />
        <BurgerMenu />
      </div>
      <div className='MessagesContainer'>
        <h3 className='msg-container-title'>Story board</h3>
        <div className="scrollMessages">
          {
            messagesList.map((msg, i) =>
              <MessagesUrgent key={i} messageUrgent={msg[0]} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default MessagesContainerUrgent