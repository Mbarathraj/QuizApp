import './App.css'
import QuizComponent from './Components/QuizComponent'
import Header from './Components/Header'
import Questions from './Components/Main'
import Footer from './Components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import beepAudio from './Audio/beep-6-96243.mp3';
import Login1 from './Login/Login1'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  return (
    <>
    {/* <QuizComponent/> */}
      {/* <Login/> */}
      
      {/* <Header />
      <Footer noOfQuestions={25} />
      <Questions />
      <ToastContainer /> * */}
       {/* <Login1/>  */} 
       <BrowserRouter>
       <Routes>
        <Route path='/login' element={<Login1/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
