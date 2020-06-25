import React, { Component } from 'react'
import './Messages.css'

class Messages extends Component {
  render() {
    return (
      <div className='Messages'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit mattis tempor. Etiam euismod purus ut odio hendrerit, in congue purus posuere.</p>
        <div className='msg-details'>
          <p className='msg-small'>Comment je me sens : 3</p>
          <p className='msg-small'>12/06/2020 à 10h23</p>
        </div>
      </div>
    )
  }
}

export default Messages