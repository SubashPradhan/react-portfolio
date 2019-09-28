import React from 'react'
import './Style/App.css'

export default function Footer(){
  return <div>
    <div className='footer'>
      Made with passion 
      <span role="img" aria-label='cool'> 🤙 </span>
       Subash Pradhan @  
      {new Date().getFullYear()}
      </div>
  </div>
}