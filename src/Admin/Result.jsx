import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
const Result = () => {
  return (
    <div className='result'>
       <div className="row m-3">
       <Accordion className='mt-4' defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
         <div className="qtitile me-2"><sup className='text-primary'>Key: (123456) </sup> &nbsp; Data Structure</div>
         <div className="qdate">(15-04-2024)</div>
        </Accordion.Header>
        <Accordion.Body >
        
          <table className="table table-bordered">
            <thead>
                <tr>
                  <th>Serial No</th>
                  <th>Reg. No</th>
                  <th>User Name</th>
                  <th>Dept</th>
                  <th>No of Tab Switchs</th>
                  <th>Mark</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <th>73152113015</th>
                <th>Barathraj M</th>
                <th>CSE</th>
                <th>5</th>
                <th>90</th>
              </tr>
            </tbody>
          </table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
       <Accordion className='mt-4'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
         <div className="qtitile me-2"><sup className='text-primary'>Key :(123456) </sup> &nbsp; Problem Solving</div>
         <div className="qdate">(15-04-2024)</div>
        </Accordion.Header>
        <Accordion.Body >
        
          <table className="table table-bordered">
            <thead>
                <tr>
                  <th>Serial No</th>
                  <th>Reg. No</th>
                  <th>User Name</th>
                  <th>Dept</th>
                  <th>No of Tab Switchs</th>
                  <th>Total Test Cases</th>
                  <th>Passed Test Cases</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <th>73152113015</th>
                <th>Barathraj M</th>
                <th>CSE</th>
                <th>0</th>
                <th>5</th>
                <th>5</th>
              </tr>
            </tbody>
          </table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
       <Accordion className='mt-4'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
         <div className="qtitile me-2"><sup className='text-primary'>Key :(123456) </sup> &nbsp; Data Structure</div>
         <div className="qdate">(15-04-2024)</div>
        </Accordion.Header>
        <Accordion.Body >
        
          <table className="table table-bordered">
            <thead>
                <tr>
                  <th>Serial No</th>
                  <th>Reg. No</th>
                  <th>User Name</th>
                  <th>Dept</th>
                  <th>No of Tab Switchs</th>
                  <th>Mark</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <th>73152113015</th>
                <th>Barathraj M</th>
                <th>CSE</th>
                <th>5</th>
                <th>90</th>
              </tr>
            </tbody>
          </table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
       </div>
    </div>
  )
}

export default Result
