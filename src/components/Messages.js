import React from 'react'
import './Messages.css'

const Messages = (props) => {
  return (
    <div className='Messages'>
      <p>{props.messagesPreview.preview}<button className="readMore">... read more</button></p>
      <div className='msg-details'>
        <p className='msg-small'>Comment je me sens : {props.mood}</p>
        <p className='msg-small'>{props.date}</p>
      </div>
    </div>
  )
}

export default Messages