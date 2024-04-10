import { useEffect, useState } from 'react'

import './App.css'
import Header from './Components/Header'
import Questions from './Components/Main'
import Footer from './Components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import beepAudio from './Audio/beep-6-96243.mp3';

function App() {
  const [switchcount, setSwitchCount] = useState(0)
  let audio = new Audio(beepAudio);

  function notify(switchcount) {
    toast(`Don't Switch the page ${switchcount}/5`);
  };
  useEffect(() => {
    if (switchcount == 5) {

    }
    if (switchcount >= 1) {
      notify(switchcount)
    }
  }, [switchcount])
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState == "hidden") {
      setSwitchCount(switchcount + 1);
    }
    if (document.visibilityState == "visible") {
      audio.play();
    }
  })
  setInterval(() => {
    fullscreen()
  }, 1000)

  function fullscreen(){
    document.documentElement.requestFullscreen().catch(e => console.log(e))
  }

  return (
    <>
      <Header />
      <Footer noOfQuestions={25} />
      <Questions />
      <ToastContainer />
    </>
  )
}

export default App
