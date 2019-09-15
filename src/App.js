import React, { Component } from 'react';
import Home from './Components/Home'
import Navigator from './Components/Home/Navigator'
import Slider from 'react-slick'

class App extends Component {

  render() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 0,
    // slidesToScroll: 1
  };


    return <div> 
      {/* <Navigator /> */}
      <Slider {...settings}>
      

          <Home />
      
      <div>

          <img src = "https://inchoo.net/wp-content/uploads/2017/08/Slick_Carousel.png" alt='hey'/>
      </div>
      </Slider>
    </div>

  }
}

export default App
