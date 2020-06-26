import React from 'react'

import '../Messages.css'

const MessagesUrgent = ({ messageUrgent }) => {
  const { id, firstname, lastname, message, mood_status, totalMessages, creation_date } = messageUrgent
  return (
    <div className='Messages'>
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem' }}>
        <p style={{ fontWeight: '600', fontSize: '20px', color: '#679B9B' }}>{lastname} {firstname}</p>
        <div style={{ color: 'red', fontWeight: '600', fontSize: '20px' }}>{totalMessages}</div>
      </div>
      <p>{message}</p>
      <div className='msg-details'>
        <p className='msg-small'>Comment je me sens : {mood_status}</p>
        <p className='msg-small'>{creation_date}</p>
      </div>
    </div>
  )
}

export default MessagesUrgent