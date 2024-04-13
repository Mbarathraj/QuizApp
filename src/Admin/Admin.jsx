import React from 'react'
import './Admin.css'

import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaMarker } from "react-icons/fa6";
const Admin = () => {
  return (
    <div>
        <div className="admi-container">
            <div className="admin-header">
                <div className="head">
                    
                        <img src="src/images/logo-new3.jpg" alt="" />
                  
                    <div className="list">
                    <ul>
                        <a href="http://"><li><IoIosAddCircleOutline className='Add-icon icons'/> Add Questions</li></a>
                        <a href="http://"><li><MdOutlineFileUpload className='Upload-icon icons'/> Upload Questions</li></a>
                        <a href="http://"><li><FaMarker className='Result-icon icons'/> Students Result</li></a>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin