import "./App.css";
import QuizComponent from "./Components/QuizComponent";

// import Header from './Components/Header'
// import Questions from './Components/Main'
// import Footer from './Components/Footer'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login1 from "./Login/Login1";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import { useState } from "react";

function App() {
  let user = JSON.parse(localStorage.getItem("userInfo"));

  const [userInfo, setUserInfo] = useState(user);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Login */}

          <Route
            path="/login"
            element={<Login1 setUserInfo={setUserInfo} />}
          ></Route>

          {/* Login/Dashboard */}

          <Route
            path="/login/dashboard"
            element={<Dashboard userInfo={userInfo} />}
          ></Route>

          {/* Login/Dashboard/Quiz */}

          <Route path="/quiz" element={<QuizComponent />}></Route>

          {/* Login/AdminDashboard */}

          <Route path="/login/admindashboard"></Route>
        </Routes>
        <ToastContainer />
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
    </>
  );
}

export default App;
