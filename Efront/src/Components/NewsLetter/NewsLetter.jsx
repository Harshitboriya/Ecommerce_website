import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>   Get Exclusice offers on Your email</h1>
        <p>subdcribr to our newletter and stay update</p>
        <div>
            <input type="email"  placeholder="your email id"/>
            <button>Suscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter