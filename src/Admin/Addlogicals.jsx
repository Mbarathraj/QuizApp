import { useEffect, useState } from "react";
import { BsFillSendArrowUpFill } from "react-icons/bs";

const Addlogicals = () => {
  const [testcase, addTestcase] = useState(0);
  const AddElements = () => {
    const noOfTestcase = document.getElementById("noOfTestcase");
    addTestcase(noOfTestcase.value);
  };

  return (
    <div className="addlogical">
      <div className="Logical-questions mt-2">
        <h1>Admin side for handling programming quesitions</h1>
        <div className="add-logicals">
          <div className="question-head ">
            <div className="title">
              <input type="text" placeholder="Title *" />
            </div>
            <div className="description">
              <textarea className="" type="text" placeholder="Description *" />
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
              {Array.from({ length: testcase }).map((_, index) => (
                <div key={index} className="test-case">
                  <div className="text-primary  ">
                    Test Case {index + 1}:
                  </div>

                  <textarea placeholder="Enter Input Here" />
                  <textarea placeholder="Enter Output Here" />
                </div>
              ))}

              {testcase > 0 && <button className="btn btn-success rounded-pill col-1 mt-3">
                <BsFillSendArrowUpFill /> &nbsp; Post
              </button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addlogicals;
