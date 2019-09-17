import React, { Component } from 'react';
import Home from './Components/Home'
import About from './Components/About'
import Navigator from './Components/Home/Navigator'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Background from './Components/Home/Background';

class App extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1  
    };

    return <div>
      <Navigator />
      <Background />
      <Slider {...settings}>
        <Home />
        <About />
      </Slider>
    </div>

  }
}

export default App
