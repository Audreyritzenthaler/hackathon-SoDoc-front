import React, { useState } from 'react'
import axios from 'axios'
import './PostMessage.css'

const PostMessage = ({ setMessages, messagesFull }) => {
  const [message, setMessage] = useState('')
  const [mood_status, setmood_status] = useState()

  const catchMessage = (e) => {
    const catchMsg = e.target.value
    setMessage(catchMsg)
  }

  const handleOptionChange = (changeEvent) => {
    setmood_status(changeEvent.target.value)
  }

  const postMessage = (e) => {
    // e.preventDefault()
    const id = 1
    const doctorId = 1
    axios({
      method: 'post',
      url: `http://localhost:8080/api/patients/${id}/messages`,
      data: {
        message, doctorId, mood_status
      }
    })
      .then(res => {
        const temp = [...messagesFull]
        console.log(temp);
        temp.unshift(res.data)
        setMessages(temp)
        setMessage('')
        setmood_status()
      })
  }

  return (
    <div className='PostMessage'>
      <h3 className='post-title'>My message</h3>
      <div className='post-container'>
        <div className='post-message'>
          <textarea className='post-text' value={message} name="" id="msg" cols="20" rows="5" onChange={catchMessage}></textarea>
          <hr />
          <div className='post-radio-button-container'>
            <p className="feeling">How I feel :</p>
            <div className='post-buttons'>
              <div className='post-radio-button'>
                <input className='radio-button' type="radio" name='mood' value='5' checked={mood_status === '5'} onChange={handleOptionChange} />
                <label htmlFor="5" className='post-label'>5</label>
              </div>
              <div className='post-radio-button'>
                <input className='radio-button' type="radio" name='mood' value='4' checked={mood_status === '4'} onChange={handleOptionChange} />
                <label htmlFor="4" className='post-label'>4</label>
              </div>
              <div className='post-radio-button'>
                <input className='radio-button' type="radio" name='mood' value='3' checked={mood_status === '3'} onChange={handleOptionChange} />
                <label htmlFor="3" className='post-label'>3</label>
              </div>
              <div className='post-radio-button'>
                <input className='radio-button' type="radio" name='mood' value='2' checked={mood_status === '2'} onChange={handleOptionChange} />
                <label htmlFor="2" className='post-label'>2</label>
              </div>
              <div className='post-radio-button'>
                <input className='radio-button' type="radio" name='mood' value='1' checked={mood_status === '1'} onChange={handleOptionChange} />
                <label htmlFor="1" className='post-label'>1</label>
              </div>
              <div className='post-radio-button'>
                <input className='radio-button' type="radio" name='mood' value='0' checked={mood_status === '0'} onChange={handleOptionChange} />
                <label htmlFor="0" className='post-label'>0</label>
              </div>
            </div>
            <div>
              <button className='post-button' onClick={postMessage} type="submit">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostMessage