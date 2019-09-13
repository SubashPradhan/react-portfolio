import React, { Component } from 'react'
import Navigator from './Navigator'
import View from './view'

class Home extends Component {

  render(){
    return <div>
      <Navigator />
      <View />
    </div>

  }
}

export default Home