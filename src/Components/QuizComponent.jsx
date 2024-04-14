import React from 'react'
import { useEffect, useState } from 'react'
import Header from './Header'
import Questions from './Main'
import Footer from './Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import beepAudio from '../Audio/beep-6-96243.mp3';

import './QuizComponent.css'
import Timer from './Timer'

const QuizComponent = () => {

  const [minimizeCount, setMinimizecount] = useState(0)
  const [switchcount, setSwitchCount] = useState(0)

  const [show, setShow] = useState(true)
  // let audio = new Audio(beepAudio);

  // document.addEventListener("contextmenu",(e)=>{
  //   e.preventDefault()
  // })

  // function notify(switchcount) {
  //   toast(`Don't Switch the page ${switchcount}/5`);
  // };
  // function notifyMaximum() {
  //   toast("Maximize the window size Don't do this again! ")
  // }
  // useEffect(() => {
  //   if (switchcount == 5) {
        
  //   }
  //   if (switchcount >= 1) {
  //     notify(switchcount)
  //   }
  // }, [switchcount])
  // document.addEventListener("visibilitychange", () => {
  //   if (document.visibilityState == "hidden") {
  //     setSwitchCount(switchcount + 1);
  //   }
  //   if (document.visibilityState == "visible") {
  //     audio.play();
  //   }
  // })
  // setInterval(() => {
  //   fullscreen()
  // }, 1000)

  // function fullscreen(){
  //   document.documentElement.requestFullscreen().catch(e => console.log(e))
  // }

  // useEffect(()=>{
  //   if(minimizeCount>=6){
  //    alert("Addigga")  
  //   }
  //   setMinimizecount(minimizeCount+1)
  // },[show])

  // useEffect(()=>{
    
  // },[minimizeCount])
  // window.addEventListener("resize", () => {
  //   if(window.innerWidth==screen.width){
  //     setShow(true)
  //   }
  //   if (window.innerWidth < screen.width) {
  //     setShow(false)
  //   }
  // })
  return (
    <>
      {
        show ?
          <div className='quizCompentent'>
            <Questions />
            <ToastContainer />
          </div> :
          <div className="maximizeContent">
              Don't do this again or else your test will be autosubmit
          </div>
      }
      <ToastContainer />
    </>
  )
}

export default QuizComponent
