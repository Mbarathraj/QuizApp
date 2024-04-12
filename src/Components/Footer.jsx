import React, { useState } from 'react'
import "./Footer.css"

const Footer = (params) => {
  const {noOfQuestions,answer,mark,markedCount,answeredQuestions,setNext}=params;
       let [Ansquestion,setAnsQuestion]=useState(noOfQuestions);
     let [unAnsquestion,setUnAnsQuestion]=useState(0);
     let circles=document.querySelector(".circles")
    //  circles.addEventListener("click",(e)=>{
    //       console.log(e.target.key)
    //  })
    let arr=[];
for(let i=1;i<=noOfQuestions;i++){
     arr.push(i)
}

  return (
  
    <div className='footer-container'>
        <div className="circles">
    {
        arr.map((value,index)=>{
           return <div className='circle' key={index}
             onClick={()=>{
             setNext(index)
             }}
           
           
           >{value}</div>
        })
    }
</div>
        <div className="details">
           <p> Answered: {answer}</p>
           <p> Un Answered: {noOfQuestions-answer}</p>
           <p>Marked: {markedCount}</p>
        </div>

    </div>
  )
}

export default Footer
