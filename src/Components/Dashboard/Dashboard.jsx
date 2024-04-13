import React, { useState } from 'react'
import Sidebar from './Sidebar'
import './Dashboard.css'
import MainDash from './MainDash'
import { useScrollTrigger } from '@mui/material'
const Dashboard = ({userInfo}) => {

  const [currentSection,setCurrentSection]=useState(0)
  return (
    <div className='dashboard'>
      <Sidebar setCurrentSection={setCurrentSection}/>
      <MainDash currentSection={currentSection} userInfo={userInfo}/>
    </div>
  )
}

export default Dashboard
