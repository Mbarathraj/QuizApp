import React from 'react'
import './Main.css'
const Questions = () => {
  return (
    <>
    <div className='main-container'>
      <div className="questions">
       <div className="question">
       1. Full form of HTML?
       </div>
       <div className="navigate">
        <button>Previous</button>
        <button>Next</button>
       </div>
      </div>
      <div className="options">
        <div className="option">A. Hyper Text Markup Language </div>
        <div className="option">B. HyperText and links Markup Language</div>
        <div className="option">C. HyperText Markup Language</div>
        <div className="option">D. None of these</div>
        <div className="confirm">
          <button>Confirm</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Questions
