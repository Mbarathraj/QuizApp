import React, { useEffect, useState } from 'react'
import './Main.css'
import axios from 'axios';
import Footer from './Footer';
import Header from './Header';


const Questions = () => {


  const [fetchQuestions, setFetchQuestions] = useState([]);
  const [prev,setPrev]=useState(0);
  const [next,setNext]=useState(0);
  const [answeredQuestions,setAnsweredQuestions]=useState([]);
  const [answerCount,setAnswerCount]=useState(0)
  const [mark,setMark]=useState([])
  const [markedCount,setMarkedCount]=useState(0);
  const [selectedOption,setSelectedOption]=useState("")


  let levelOfQuestion="easy";
  let catOfQuestion=0;
 
 

  async function fetchData() {
    
    await axios.get(`http://localhost:8000/quizes/${catOfQuestion}/${levelOfQuestion}`).then(res => {
      setFetchQuestions(res.data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])



  useEffect(()=>{
    if(selectedOption!==""){
       selectedOption.classList.add("active")
       console.log(selectedOption)
  }
  },[selectedOption])

//handle previous

function handlePrevious(){
  if(next>=1){
  setNext(next-1)
  }
}

function handleNext(){
  if(next<fetchQuestions.length-1){
  setNext(next+1)
  }
}

function handleAnswer(index){
  
}

  return (
    <>
    <Header noOfQuestions={fetchQuestions.length}/>
    <Footer noOfQuestions={fetchQuestions.length} answer={answerCount} mark={mark} markedCount={markedCount} answeredQuestions={answeredQuestions}
    setNext={setNext}
    />

      <div className='main-container'>
      {fetchQuestions.filter((value, index) => index === next).map((question, index) => {
    return (
        <>
            <div className="questions" key={next}>
                <div className='question'>
                    {next+1}. {question.question}
                </div>
                <div className="navigate">
                    <button
                    onClick={()=>{
                      handlePrevious()
                    }}
                    
                    >Previous</button>
                    <button
                    onClick={()=>{
                      handleNext()
                    }}
                    
                    >Next</button>
                </div>
            </div>
            <div className="options">
                {question.options.map((option, idx) => {
                    return (
                      <div 
                      className={`option option-${idx}-${next}`} // Add a class with the index for each option
                      key={idx}
                      onClick={(e) =>{
                        if(selectedOption!==""){
                          selectedOption.classList.remove("active")
                        }
                        setSelectedOption(e.target)
                      }}
                  >
                      {idx + 1}. {option}
                  </div>
                    )
                })}
                <div className="confirm">
                    <button
                    
                    onClick={()=>{
                      alert(next)
                    }}
                    
                    >Confirm</button>
                </div>
            </div>
        </>
    )
})}
      </div>
    </>
  )
}
export default Questions
