import React from 'react'

import '../Messages.css'

const MessagesUrgent = ({messageUrgent}) => {
  const {id, firstname, lastname, message, mood_status, totalMessages, creation_date} = messageUrgent
  return (
    <div className='Messages'>
      <p>{lastname} {firstname} {totalMessages}</p>
      <p>{message}</p>
      <div className='msg-details'>
        <p className='msg-small'>Comment je me sens : {mood_status}</p>
        <p className='msg-small'>{creation_date}</p>
      </div>
    </div>
  )
}

export default MessagesUrgent