import React, { useState } from 'react'
import Sidebar from './Sidebar'
import './Dashboard.css'
import MainDash from './MainDash'
import { useScrollTrigger } from '@mui/material'
const Dashboard = () => {

  const [currentSection,setCurrentSection]=useState(0)
  return (
    <div className='dashboard'>
      <Sidebar setCurrentSection={setCurrentSection}/>
      <MainDash currentSection={currentSection}/>
    </div>
  )
}

export default Dashboard
