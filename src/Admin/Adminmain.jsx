import './Admin.css'
import Admin from './Admin'
import AdminaddQuestion from './AdminaddQuestion'
import Addlogicals from './Addlogicals'
import AdminMainContent from './AdminMainContent'
import { useState } from 'react'

const Adminmain = () => {

  const [showState,setShowState]=useState(1)
  return (
    <div>
          <div className="main">
              <Admin setShowState={setShowState}/>
              {/* <Addlogicals />
              <AdminaddQuestion/> */}
              <AdminMainContent showState={showState}/>
            
          </div>
    </div>
  )
}

export default Adminmain
