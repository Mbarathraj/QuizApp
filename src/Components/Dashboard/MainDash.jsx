import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './MainDash.css'
import { FaUserEdit } from "react-icons/fa";
import quizsvg from '../../assets/Quiz.svg'
import codingsvg from '../../assets/Conding.svg'
import apptisvg from '../../assets/Appti.svg'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BiVerticalCenter } from 'react-icons/bi';

const MainDash = ({ currentSection, userInfo }) => {
  useEffect(() => {
    if (!userInfo.email) {
      navigate("/login")
    }
  }, [])
  const navigate = useNavigate();
  let section = currentSection;
  let secId = section.id
  let quizInputs = document.querySelectorAll(".quizInput");

  quizInputs.forEach((input, index) => {
    input.addEventListener("keyup", (event) => {
      // Focus on the next sibling element if it exists
      if (event.key === "Backspace") {
        let pre = quizInputs[index - 1]
        if (pre) {
          pre.focus()
        }
      }
      else {
        let nextInput = quizInputs[index + 1];
        if (nextInput) {
          nextInput.focus();
        }
      }
    });
  });

  const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false)
  }
  const handleShow = () => {
    setShow(true)
  }
  const handleSubmit = () => {
    navigate("/quiz")
  }

  return (
    <div className='mainDash border'>

      {/* Home */}
      <section className={secId === undefined || secId == '0' ? `active1` : `d-none`}>
        Still in developing
      </section>

      {/* quiz */}
      <section className={secId == '1' ? `active1` : `d-none`} id='quiz'>
        <img src={quizsvg} alt="" />
        <div className="key">
          <h5>Enter Key Here*</h5>
          <div className="quizinput-group">
            <input type="text" maxLength={1} className='quizInput' />
            <input type="text" maxLength={1} className='quizInput' />
            <input type="text" maxLength={1} className='quizInput' />
            <input type="text" maxLength={1} className='quizInput' />
            <input type="text" maxLength={1} className='quizInput' />
            <input type="text" maxLength={1} className='quizInput' />
          </div>
          <button className='btn btn-primary mt-3 col-10'>Submit</button>
        </div>

      </section>


      {/* coding */}
      <section className={secId == '2' ? `active1` : `d-none`} id='coding'>
        <img src={codingsvg} alt="" />
        <div className="key">
          <h5>Enter Key Here*</h5>
          <div className="codinginput-group">
            <input type="text" maxLength={1} className='quizInput' />
            <input type="text" maxLength={1} className='quizInput' />
            <input type="text" maxLength={1} className='quizInput' />
            <input type="text" maxLength={1} className='quizInput' />
            <input type="text" maxLength={1} className='quizInput' />
            <input type="text" maxLength={1} className='quizInput' />
          </div>
          <div onClick={handleShow} className="btn btn-primary mt-3 col-10">
            Submit
          </div>
          <Modal show={show} onHide={handleClose}
            centered={BiVerticalCenter}

          >
            <Modal.Header closeButton>
              <h5> Guidelindes</h5>
            </Modal.Header>
            <Modal.Body>
              <ul>
                <li className='alert alert-warning'>Dont' switch the tab & Don't minimize the tab size or else your test will be utomatically submitted</li>

              </ul>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="success" onClick={handleSubmit}>
                Start
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

      </section>


      {/* Apptitude */}
      <section className={secId == '3' ? `active1` : `d-none`} id='appti'>
        <img src={apptisvg} alt="" />
        <div className="key">
          <h5>Enter Key Here*</h5>
          <div className="apptiinput-group">
            <input type="text" maxLength={1} className='quizInput' />
            <input type="text" maxLength={1} className='quizInput' />
            <input type="text" maxLength={1} className='quizInput' />
            <input type="text" maxLength={1} className='quizInput' />
            <input type="text" maxLength={1} className='quizInput' />
            <input type="text" maxLength={1} className='quizInput' />
          </div>
          <button className='btn btn-primary mt-3 col-10'>Submit</button>
        </div>
      </section>


      {/* Profile */}
      <section className={secId == '4' ? `active1` : `d-none`} id='profile'>
        <div className="profile-container border">
          <h4 className='mt-3 mb-3'>Edit Profile <FaUserEdit /></h4>

          <label htmlFor="">User Name *</label>
          <input type="text" className='form-control mt-1'
            value={userInfo.name}
          />
          <label htmlFor="" className='mt-3'>Email *</label>
          <input type="text" className='form-control mt-1'
            value={userInfo.email}
          />
          <label htmlFor="" className='mt-3'>Password *</label>
          <input type="text" className='form-control mt-1' />
          <label htmlFor="" className='mt-3'>Confirm Password *</label>
          <input type="text" className='form-control mt-1' />
          <button className='btn btn-primary m-2 col-8'>Update</button>
        </div>

      </section>

    </div>
  )
}

export default MainDash
