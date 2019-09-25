import React from 'react'
import Gallery from 'react-grid-gallery';
import Tada from 'react-reveal/Tada';
import Reveal from 'react-reveal/Reveal';
import '../../Components/Style/Portfolio.css'

export default function View(props) {
  const { images } = props
  return <div className='container'>
    <Tada>
      <h1>My Portfolio </h1>
    </Tada>
    <Reveal effect='fadeInUp'>
      <div className='portfolio'>
        <Gallery
          images={images}
          backdropClosesModal={true}
          margin={25}
          rowHeight={250}
        />
      </div>
    </Reveal>
  </div>
}


