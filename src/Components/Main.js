import React, { Component } from 'react';
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import { Route } from 'react-router-dom'
import SwipeableRoutes from "react-swipeable-routes";
import '../Components/Style/App.css'

class Main extends Component {
  render() {
    return <div>
      <SwipeableRoutes dots={true}>
        <Route exact path='/' component={Home} />
        <Route path='/Portfolio' component={Portfolio} />
        <Route path='/About' component={About} full/>
        <Route path='/Contact' component={Contact} />
       </SwipeableRoutes>
    </div>
  }
}

export default Main
