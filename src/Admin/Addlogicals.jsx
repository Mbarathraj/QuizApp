import { useEffect, useState } from "react";
import { BsFillSendArrowUpFill } from "react-icons/bs";
import Accordion from 'react-bootstrap/Accordion';
import { AccordionBody, AccordionHeader, AccordionItem } from "react-bootstrap";
const Addlogicals = () => {
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [testcase, addTestcase] = useState(0)
  const [readTestcaseInput, setReadTestcaseInput] = useState()
  const [readTestcaseOutput, setReadTestcaseOutput] = useState()
  const [accordion, setaccordian] = useState()
  const [testcases, setTestcase] = useState([])
  const [index, setIndex] = useState(0)
  const [key,setKey]=useState()
  function generateKey(){
    let random=Math.floor(Math.random()*100000)
    setKey(random)
  }
  const AddElements = () => {
    if(title.length> 0 && description.length>0){
      const noOfTestcase = document.getElementById("noOfTestcase");
      if(noOfTestcase.value >0){
      addTestcase(noOfTestcase.value);
      }
      else{
        alert("Number of test Cases required")
      }
    }
    else{
      alert("Title, Description required")
    }
  };

  function handlechange(input, output, id, title, description) {
    setTestcase([...testcases, { id, input, output,title,description }])
  }

  // useEffect(() => {
  //   console.log(testcases)
  // }, [testcases])

  // useEffect(() => {
  //   console.log(accordion)
  // }, [accordion])

  // useEffect(()=>{
  //   console.log(testcase)
  // },[testcase])

  useEffect(()=>{
 alert(key)
  },[key])

  return (
    <div className="addlogical">
      <div className="Logical-questions mt-2">
        <h1>Admin side for handling programming quesitions</h1>
        <div className="add-logicals">
          <div className="question-head ">
            <div className="title">
              <input type="text" placeholder="Title *" 
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
              />
            </div>
            <div className="description">
              <textarea className="" type="text" placeholder="Description *" 
              onChange={(e)=>{
                setDescription(e.target.value)
              }}
              />
            </div>
          </div>
          <div className="test-cases border">
            <div className="no-of-text-cases">
              <label htmlFor="">Number of Test case:</label>
              <input
                className="ps-3 rounded-pill border"
                type="number"
                name=""
                id=""
                min={1}
                max={9}
                minLength={1}
                id="noOfTestcase"
              />
              <button
                onClick={AddElements}
                className="ms-4 btn btn-primary rounded-pill"
              >
                Add Testcase
              </button>
            </div>

            <div className="input-text-cases">

              {index < testcase && (
                <div key={index} className="test-case">
                  <div className="text-primary  ">
                    Test Case {index + 1}:
                  </div>
                  <textarea placeholder="Enter Input Here"

                    onChange={(e) => {
                      setReadTestcaseInput(e.target.value)
                    }}
                  />
                  <textarea placeholder="Enter Output Here"
                    onChange={(e) => {
                      setReadTestcaseOutput(e.target.value)
                    }}
                  />
                  <button className="btn btn-primary"
                    onClick={() => {
                      handlechange(readTestcaseInput, readTestcaseOutput, index,title,description)
                      setIndex(index + 1)
                    }}
                  >Add</button>
                </div>
              )

              }

              {(testcase == index && testcase > 0) && <button className="btn btn-success rounded-pill col-1 mt-3"
                onClick={() => {
                  setaccordian(testcases)
                  setTestcase([])
                  addTestcase(0)
                  setIndex(0)
                  generateKey()
                }}
              >
                <BsFillSendArrowUpFill /> &nbsp; Post
              </button>}
            </div>
          </div>

       
          {accordion && (
            <Accordion className="mt-5">
              <AccordionItem>
                <AccordionHeader>

                </AccordionHeader>
                <AccordionBody>
                  {
                    accordion.map((value, index) => {
                      return (<div className="d-flex align-items-center gap-3">
                        <div className="text-primary  ">
                          Test Case {index + 1}:
                        </div>
                        <textarea placeholder="Enter Input Here"
                        value={value.input}  style={{resize:"none",width:"500px"}} className="m-3"
                        />
                        <textarea placeholder="Enter Output Here"
                         value={value.output} style={{resize:"none",width:"500px"}} className="m-3"
                        />
                      </div>)
                    })
                  }
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          )
          }
        </div>

      </div>

    </div>
  );
};

export default Addlogicals;
