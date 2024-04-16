import { BsFillSendArrowUpFill } from "react-icons/bs";
import { IoAddCircle } from "react-icons/io5";
import { useEffect, useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineFormatBold } from "react-icons/md";
import { MdOutlineFormatItalic } from "react-icons/md";
import { MdOutlineFormatUnderlined } from "react-icons/md";

const AdminaddQuestion = () => {
  const [elements, setElements] = useState([]);
  const [questions, setQuestions] = useState([]);
   const [isBold, setIsBold] = useState(false);
   const [isItalic, setIsItalic] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);
  const [addbut, setAddbut] = useState(false)
  const [mrtop, setMrtop] = useState(0);
   const handleBoldClick = () => {
     setIsBold(!isBold);
     console.log(!isBold)
   };

   const handleItalicClick = () => {
     setIsItalic(!isItalic);
   };

   const handleUnderlineClick = () => {
     setIsUnderlined(!isUnderlined);
  };
  function handleDelete() {
     setMrtop((prev)=> prev-340);
    var dell = document.getElementById("Delbut");
    (dell.parentNode).remove()
    
  }
  useEffect(() => {
    if (mrtop == 0) {
      setAddbut(false);
    }
  },[mrtop])
  const AddQuestions = () => {
    setAddbut(true)
     setMrtop(mrtop + 340);
    
    const newQuestion = (
      <div className="questions" key={questions.length}>
        <div className="input-question">
          <textarea type="text" placeholder="Question" />
        </div>
        <div className="options">
          <div className="opt">
            <p>
              <FaRegCircle />
              <input type="text" />
            </p>
            <p>
              <FaRegCircle />
              <input type="text" />
            </p>
            <p>
              <FaRegCircle />
              <input type="text" />
            </p>
            <p>
              <FaRegCircle />
              <input type="text" />
            </p>
          </div>
        </div>
        <div className="Delete-button" id="Delbut" onClick={() => {
          handleDelete()
        }}>
          <MdDeleteForever className="text-danger" />
        </div>
      </div>
    );
    setQuestions([...questions, newQuestion]);
   
  };

  return (
    <>
      <div className="AdminaddQuestion">
        <div className="addQ-container">
          <h1>Admin side for handling questions</h1>
          <div className="untitled-question">
            <div className="row-1">
              <div className="question-head">
                <div className="title">
                  <input
                    type="text"
                    placeholder="Untitled Question"
                    style={{
                      fontWeight: isBold ? "bold" : "normal",
                      fontStyle: isItalic ? "italic" : "normal",
                      textDecoration: isUnderlined ? "underline" : "none",
                    }}
                  />
                </div>
                <div className="title-icons">
                  <div className="bold" onClick={handleBoldClick}>
                    <MdOutlineFormatBold />
                  </div>
                  <div className="italic" onClick={handleItalicClick}>
                    <MdOutlineFormatItalic />
                  </div>
                  <div className="underline" onClick={handleUnderlineClick}>
                    <MdOutlineFormatUnderlined />
                  </div>
                </div>
              </div>
            </div>
            {!addbut && (
              <div className="row-2" style={{ display: "block" }}>
                <div className="add-icon-btn">
                  <IoAddCircle
                    className="text-primary"
                    onClick={AddQuestions}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="first-col">
            
              <div>
                {questions.map((question, index) => (
                  <div key={index}>{question}</div>
                ))}
              </div>
            
            <div className="second-col">
              <div
                className="add-icon-btn"
                style={{
                  display: !addbut ? "none" : "block",
                  textAlign: "center",
                  position: "relative",
                  marginTop: `${mrtop}px`,
                }}
              >
                <IoAddCircle
                  className="text-primary"
                  style={{ position: "absolute", left: "5px", top: "5px" }}
                  onClick={AddQuestions}
                />
              </div>
            </div>
          </div>

          <div className="addtodata">
            <button className="btn btn-success rounded-pill ps-4 pe-4 mt-4">
              <BsFillSendArrowUpFill /> &nbsp; Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminaddQuestion;
