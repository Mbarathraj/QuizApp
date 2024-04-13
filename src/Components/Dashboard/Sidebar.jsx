import React, { useEffect, useState } from 'react'
import logo from '../../images/logo-new3.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaRegUser } from "react-icons/fa6";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import { MdOutlineQuiz } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import { json, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
const Sidebar = ({setCurrentSection}) => {
  const [show, setShow] = useState(false);
  const  navigate=useNavigate();
  const handleClose = () => {setShow(false)};
  const handleShow = () => {setShow(true)};
  const handleLogin =()=>{
    localStorage.setItem("userInfo",JSON.stringify({}));
    navigate('/login')
  }
  let [sidebarState,setSidebarState]=useState("")
  useEffect(() => {
    let sideContents = document.querySelector(".sidecontents");
    sideContents.addEventListener("click", (e) => {
      if (sidebarState !== "") {
        sidebarState.classList.remove("active1");
      }
      setSidebarState(e.target);
      setCurrentSection(e.target);
      e.target.classList.add("active1");
    });
  }, [sidebarState]);
  

  return (
    <div className='sidebar'>
        <img src={logo} alt="" className='' />
      <div className="sidecontents border-top ">
        <div className="sideContent d-flex align-items-center gap-2" id='0'><IoHomeOutline /> Home</div>
        <div className="sideContent d-flex align-items-center gap-2" id='1'><MdOutlineQuiz />Quiz Assessment</div>
        <div className="sideContent d-flex align-items-center gap-2" id='2'><FaCode />Coding Assessment</div>
        <div className="sideContent d-flex align-items-center gap-2" id='3'><GiBrain />Apptitude Assessment</div>
        <div className="sideContent d-flex align-items-center gap-2" id='4'><FaRegUser />Profile</div>
      </div>
      <div  onClick={handleShow} className="logout d-flex align-items-center gap-2 ">
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
  )
}

export default Sidebar
