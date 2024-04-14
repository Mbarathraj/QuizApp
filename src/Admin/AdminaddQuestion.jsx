import { BsFillSendArrowUpFill } from "react-icons/bs";

import { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
const AdminaddQuestion = () => {
  const [elements, setElements] = useState([]);
  const addElement = () => {
    if (elements.length != 4) {
      const element = (
        <p key={elements.length}>
          <FaRegCircle />
          <input type="text" />
        </p>
      );
      setElements([...elements, element]);
    }
  };

  return (
    <>
      <div className="AdminaddQuestion">
        <div className="addQ-container">
          <h1>Admin side for handling questions</h1>
          <div className="question-head">
            <div className="title">
              <input type="text" placeholder="Title" />
            </div>
                  </div>
                  .
          <div className="questions">
            <div className="input-question">
              <textarea type="text" placeholder="Question" />
            </div>
            <div className="options">
              <div className="opt">
                {elements.map((element, index) => (
                  <div key={index}>{element}</div>
                ))}
              </div>
              <button
                className="btn btn-primary rounded-pill ps-4 pe-4 col-5"
                onClick={addElement}
              >
                Add Options
              </button>
            </div>
          </div>
          <div className="addtodata">
            <button className="btn btn-success rounded-pill ps-4 pe-4 mt-4">
              <BsFillSendArrowUpFill/> &nbsp; Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminaddQuestion;
