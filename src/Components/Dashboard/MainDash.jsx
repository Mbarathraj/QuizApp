import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './MainDash.css'
const MainDash = ({currentSection}) => {
  let section=currentSection;
  let secId=section.id
  console.log(secId)
  return (
    <div className='mainDash border'>
      <section className={secId===undefined ? `active1`:`d-none`}>
        home
      </section>
      <section className={secId=='1' ?  `active1`:`d-none`}>
      </section>
      <section className={secId=='2' ?  `active1`:`d-none`}>

      </section>
      <section className={secId=='3' ?  `active1`:`d-none`}>

      </section>
      <section className={secId=='4' ?  `active1`:`d-none`}>4
      
      </section>
      
    </div>
  )
}

export default MainDash
