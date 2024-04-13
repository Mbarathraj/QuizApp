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
import { useState } from 'react'
import Admin from '../Admin/Admin'
import AdminaddQuestion from '../Admin/AdminaddQuestion'

function App() {
  let user = JSON.parse(localStorage.getItem("userInfo"))
  // console.log(user)
  const [userInfo, setUserInfo] = useState(user)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login1 setUserInfo={setUserInfo} />}></Route>
          <Route path='/login/dashboard' element={<Dashboard userInfo={userInfo} />}></Route>
          <Route path='/login/dashboard/quiz' element={<QuizComponent />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <QuizComponent/> */}
    {/* <QuizComponent/> */}
      {/* <Login/> */}
      
      {/* <Header />
      <Footer noOfQuestions={25} />
      <Questions />
      <ToastContainer /> * */}
       {/* <Login1/>  */} 
       {/* <BrowserRouter>
       <Routes>
        <Route path='/login' element={<Login1/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
       </Routes>
       </BrowserRouter> */}
       <div className="main">
       <Admin/>
       <AdminaddQuestion/>
       </div>
       
    </>
  )
}

export default App
