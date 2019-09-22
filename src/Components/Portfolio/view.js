import React from 'react'
import Gallery from 'react-grid-gallery';
import '../../Components/Style/Portfolio.css'

export default function View(props) {
  const { images } = props
  return <div>
    <h1>My Portfolio </h1>
    <div className='portfolio'>
      < Gallery className='portfolio' images={images} />
    </div>
  </div>
}


