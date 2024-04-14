import React from 'react'
import Addlogicals from './Addlogicals'
import AdminaddQuestion from './AdminaddQuestion'
import UploadMcq from './UploadMcq'
import Result from './Result'

const AdminMainContent = ({showState}) => {
  return (
    <div>
        {showState ==1 &&   <AdminaddQuestion/>}
        {showState ==2 && <Addlogicals/>}
        {showState ==3 && <UploadMcq/>}
        {showState ==4 && <Result/>}

    
      
    </div>
  )
}

export default AdminMainContent
