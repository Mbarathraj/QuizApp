import React, { useState } from 'react'
import "./Footer.css"
const Footer = ({noOfQuestions}) => {
     let [Ansquestion,setAnsQuestion]=useState(noOfQuestions);
     let [unAnsquestion,setUnAnsQuestion]=useState(0);
     let [mark,setmark]=useState(0)

     let circles=document.querySelector(".circles")
    //  circles.addEventListener("click",(e)=>{
    //       console.log(e.target.key)
    //  })
let arr=[1,2,3,4,5,6,7,8,9,10]

  return (
    <div className='footer-container'>
        <div className="circles">
    {
        arr.map((value,index)=>{
           return <div className='circle' key={index}>{value}</div>
        })
    }
</div>
        <div className="details">
           <p> Answered: {unAnsquestion}</p>
           <p> Un Answered: {Ansquestion}</p>
           <p>Marked: {mark}</p>
        </div>
    <div className='Lavade'>

    </div>
    </div>
  )
}

export default Footer
