import React, { useEffect, useState } from 'react'
// import './Login1.css'
import {Button} from '@mui/material';
import UserIcon from '../assets/Asserts';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login1 = ({setUserInfo}) => {
useEffect(()=>{
  if(user.email){
    navigate("/login/dashboard")
  }
},[])
  let user=JSON.parse(localStorage.getItem("userInfo"))
const navigate=useNavigate()

  const [email,setEmail]=useState()
  const [password,setPassword]=useState()

function handleSubmit(){
  axios.post("http://localhost:8000/login",{email,password})
  .then(res => {
    if(res.data){
     setUserInfo(res.data);
     localStorage.setItem("userInfo",JSON.stringify(res.data));
      navigate('./dashboard')
    }
  })
  .catch(err => console.log(err))
}



  return (
    <div className='container'>
        <div className='img-box'>
          <UserIcon/>
        </div>
        <div className='title' >
            <h1>Login</h1>
            <h3 style={{fontWeight:"200"}}>Enter your details to Login</h3>
            <hr/>
        </div>
        <div className='user-select'>
            <select name="user-selection" id="select-user" className='form-control'>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
            </select>
        </div>
        <div className='text-box'>
            <div className='text-box-content'>
              <label htmlFor="text">Email *</label>
              <input type="text" placeholder='Username'
              onChange={(e)=>{
                  setEmail(e.target.value)
              }}
              />
            </div>
            <div className='text-box-content'>
              <label htmlFor="password">Password *</label>
              <input type="password" placeholder='Password'
              onChange={(e)=>{
                  setPassword(e.target.value)
              }}
              />
            </div>
        </div>
        
        <div>
            <Button className="but" variant="contained" color="success"
            onClick={()=>{
              handleSubmit()
            }}
            
            
            
            >
              Submit
            </Button>
        </div>
    </div>
  )
}

export default Login1