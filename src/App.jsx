import './App.css'
import QuizComponent from './Components/QuizComponent'
import Header from './Components/Header'
import Questions from './Components/Main'
import Footer from './Components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import beepAudio from './Audio/beep-6-96243.mp3';
import Login1 from './Login/Login1'


function App() {
  return (
    <>
      {/* <QuizComponent/> */}
      
      {/* <Header />
      <Footer noOfQuestions={25} />
      <Questions />
      <ToastContainer /> * */}
       <Login1/> 
    </>
  )
}

export default App
