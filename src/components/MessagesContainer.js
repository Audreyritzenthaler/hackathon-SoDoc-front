import React, { Component } from 'react'
import Messages from './Messages'
import './MessagesContainer.css'

class MessagesContainer extends Component {
  render() {
    return (
      <div className='MessagesContainer'>
        <h3>Mes messages</h3>
        <Messages />
      </div>
    )
  }
}

export default MessagesContainer