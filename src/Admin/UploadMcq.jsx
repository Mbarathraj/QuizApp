import React, { useEffect, useState } from 'react'
import { BsInfoCircle } from "react-icons/bs";
import { VscGitFetch } from "react-icons/vsc";
const UploadMcq = () => {
  const [random,setRandom]=useState(0)
  const [topic,settopic]=useState()
  const [noOfQuestion,setNoOfQuestion]=useState()

  function handleFetch(){
    if(topic || noOfQuestion){
      let randomValue= Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000;
      setRandom(randomValue)
    }
    else{
      alert("All fiels are required")
    }
   
  }
  return (
    // import Mcq not upload
    <div className='uploadmcq border p-2 d-flex flex-column align-items-center justify-content-center'>
      <h5 className='alert alert-info'>
      <BsInfoCircle /> You can import quizzes from our repositories</h5>
      <div className="row  w-75 p-2 d-flex justify-content-center mt-5">
        <div className="col-4">
        <label htmlFor="">Select Subject *</label>
        <select name="" id="" className='form-control'
        onChange={(e)=>{
          settopic(e.target.value)
        }}
        >
          <option value="java" selected>Java</option>
          <option value="ds">Data Structures</option>
        </select>
        </div>
        <div className="col-4">
          <label htmlFor="">No of Questions *</label>
          <input type="number" min={10} max={50} className='form-control'
          onChange={(e)=>{
            setNoOfQuestion(e.target.value)
          }}
          />
        </div>
      </div>
      <button className='btn btn-success rounded-pill ps-4 pe-4 mt-4'
      onClick={()=>handleFetch()}
      ><VscGitFetch /> Fetch </button>
      {
         random >0 && (
          <div className="row mt-5 d-flex justify-content-center">
        Generated Key *
        <div className="row d-flex justify-content-center border text-primary" style={{fontSize:"1.5rem",letterSpacing:"9px"}}>
          {random}
        </div>
      </div>
         )
       }
    </div>
  )
}

export default UploadMcq
