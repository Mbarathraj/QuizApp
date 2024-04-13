import React, { useEffect, useState } from 'react'
import logo from '../../images/logo-new3.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaRegUser } from "react-icons/fa6";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import { MdOutlineQuiz } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
const Sidebar = ({setCurrentSection}) => {
  
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
        <div className="sideContent d-flex align-items-center gap-2" id='1'><MdOutlineQuiz />Quiz Assessment</div>
        <div className="sideContent d-flex align-items-center gap-2" id='2'><FaCode />Coding Assessment</div>
        <div className="sideContent d-flex align-items-center gap-2" id='3'><GiBrain />Apptitude Assessment</div>
        <div className="sideContent d-flex align-items-center gap-2" id='4'><FaRegUser />Profile</div>
      </div>
      <div className="logout d-flex align-items-center gap-2 "><RiLogoutCircleRLine />Logout</div>
    </div>
  )
}

export default Sidebar
