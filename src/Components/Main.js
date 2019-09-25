import React, { Component } from 'react';
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import { Route } from 'react-router-dom'
import SwipeableRoutes from "react-swipeable-routes";

class Main extends Component {
  render() {
    return <div>
      <SwipeableRoutes dots>
        <Route exact path='/' component={Home} />
        <Route path='/Portfolio' component={Portfolio} />
        <Route path='/About' component={About} exact={true}/>
      </SwipeableRoutes>
    </div>
  }
}

export default Main
