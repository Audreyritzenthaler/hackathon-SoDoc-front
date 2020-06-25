import React, { Component } from 'react'
import './PostMessage.css'

class PostMessage extends Component {
  render() {
    return (
      <div className='PostMessage'>
        <h3 className='post-title'>Mon message</h3>
        <div className='post-container'>
          <div className='post-message'>
            <textarea className='post-text' name="" id="" cols="20" rows="5"></textarea>
            <hr />
            <div className='post-radio-button-container'>
              <div className='post-buttons'>
                <p>Comment je me sens :</p>
                <div className='post-radio-button'>
                  <input className='radio-button' type="radio" name='mood' value='5' checked />
                  <label htmlFor="5" className='post-label'>5</label>
                </div>
                <div className='post-radio-button'>
                  <input className='radio-button' type="radio" name='mood' value='4' />
                  <label htmlFor="4" className='post-label'>4</label>
                </div>
                <div className='post-radio-button'>
                  <input className='radio-button' type="radio" name='mood' value='3' />
                  <label htmlFor="3" className='post-label'>3</label>
                </div>
                <div className='post-radio-button'>
                  <input className='radio-button' type="radio" name='mood' value='2' />
                  <label htmlFor="2" className='post-label'>2</label>
                </div>
                <div className='post-radio-button'>
                  <input className='radio-button' type="radio" name='mood' value='1' />
                  <label htmlFor="1" className='post-label'>1</label>
                </div>
                <div className='post-radio-button'>
                  <input className='radio-button' type="radio" name='mood' value='0' />
                  <label htmlFor="0" className='post-label'>0</label>
                </div>
              </div>
              <div>
                <button className='post-button'>Envoyer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostMessage