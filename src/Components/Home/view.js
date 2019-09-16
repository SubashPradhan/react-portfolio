import React from 'react'
import '../../Components/Style/Home.css'
import Typist from 'react-typist'

export default function View(props) {
  
  return <div align='center'>
    <img src='Subash.JPG' alt='Subash' className='my-picture' />
    <Typist>
      <div className='welcome-text'>
        Hi I am Subash Pradhan !<br />
        A Full Stack Developer !<br />
        Welcome To My PortFolio !<br />
        Nice To Meet You !
   </div>
    </Typist>
  </div>


}