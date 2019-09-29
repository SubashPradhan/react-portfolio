import React from 'react'
import '../Style/Home.css'
import Typist from 'react-typist'


export default function View() {
  return <div align='center'>
    <img src='Subash.JPG' alt='Subash' className='my-picture' />
    <Typist cursor={{show: false}}>
      <div className='welcome-text'>
        Name: Subash Pradhan<br />
        A Full-Stack Developer<br />
        Welcome, Nice To Meet You !!!
   </div>
    </Typist>
  </div>


}