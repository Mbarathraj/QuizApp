import React from 'react'
import './Login1.css'
import {Button} from '@mui/material';
import UserIcon from '../assets/Asserts';

const Login1 = () => {
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
              <label htmlFor="text">Username*</label>
              <input type="text" placeholder='Username'/>
            </div>
            <div className='text-box-content'>
              <label htmlFor="password">Password*</label>
              <input type="password" placeholder='Password' />
            </div>
        </div>
        
        <div>
            <Button className="but" variant="contained" color="success">
              Submit
            </Button>
        </div>
    </div>
  )
}

export default Login1