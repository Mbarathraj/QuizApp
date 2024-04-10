import React from 'react'
import './Header.css'
const Header = () => {  
  return (
    <div className='header-container'>
        <div className="logo">Data Structure</div>
        <div className="tail">
        <div className="timer">
            01:30:00
        </div>
        <button>Submit</button>
        </div>
    </div>
  )
}

export default Header
