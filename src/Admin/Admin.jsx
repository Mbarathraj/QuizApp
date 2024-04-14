
import './Admin.css'
import { SiCompilerexplorer } from "react-icons/si";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaMarker } from "react-icons/fa6";
import logo from '../images/logo-new3.png'
import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiLogoutCircleRLine } from "react-icons/ri";

const Admin = ({ setShowState }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => { setShow(false) };
  const handleShow = () => { setShow(true) };
const navigate=useNavigate()
  const handleLogin = () => {
    localStorage.setItem("userInfo", JSON.stringify({}));
    navigate('/login')
  }
  return (
    <div>
      <div className="admi-container">
        <div className="admin-header">
          <div className="head">
            <img src={logo} alt="" />
            
            <div className="list">


              <div id='1'
                onClick={(e) => {
                  setShowState(e.target.id)
                }}

              >
                <IoIosAddCircleOutline className="Add-icon icons" /> Add MCQ
              </div>


              <div id='2'
                onClick={(e) => {
                  setShowState(e.target.id)
                }}

              >
                <SiCompilerexplorer className='Add-icon icons' /> Problem
                Solving
              </div>


              <div id='3'
                onClick={(e) => {
                  setShowState(e.target.id)
                }}

              >
                <MdOutlineFileUpload className="Upload-icon icons" /> Upload
                MCQ
              </div>


              <div id='4'
                onClick={(e) => {
                  setShowState(e.target.id)
                }}

              >
                <FaMarker className="Result-icon icons" /> Students Result
              </div>

            </div>
            <div onClick={handleShow} className="logout d-flex align-items-center gap-2 ">
              <RiLogoutCircleRLine />Logout
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                Logout
              </Modal.Header>
              <Modal.Body>Are you sure to logout ?</Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  No
                </Button>
                <Button variant="success" onClick={handleLogin}>
                  Yes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin