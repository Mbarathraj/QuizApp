import React, { useEffect, useState } from 'react'
import './Header.css'
import Timer from './Timer';

const Header = ({ noOfQuestions}) => {
  return (
    <div className='header-container'>
      <div className="logo">Data Structure</div>
      <div className="tail">
         <Timer noOfQuestions={noOfQuestions}/>
        <button onClick={()=>{
          
        }}>Submit</button>
      </div>
    </div>
  )
}

export default Header
