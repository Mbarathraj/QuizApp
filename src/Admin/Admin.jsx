
import './Admin.css'
import { SiCompilerexplorer } from "react-icons/si";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";

import { FaMarker } from "react-icons/fa6";
import logo from '../images/logo-new3.jpg';
const Admin = () => {
  return (
    <div>
      <div className="admi-container">
        <div className="admin-header">
          <div className="head">
            <img src={logo} alt="" />

            <div className="list">
              <ul>
                <a href="http://">
                  <li>
                    <IoIosAddCircleOutline className="Add-icon icons" /> Add MCQ
                  </li>
                </a>
                <a href="http://">
                  <li>
                    <SiCompilerexplorer className='Add-icon icons' /> Problem
                    Solving
                  </li>
                </a>
                <a href="http://">
                  <li>
                    <MdOutlineFileUpload className="Upload-icon icons" /> Upload
                    MCQ
                  </li>
                </a>
                <a href="http://">
                  <li>
                    <FaMarker className="Result-icon icons" /> Students Result
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin