import React, { Component } from 'react'
// import Navigator from './Navigator'
import View from './view'

class Home extends Component {
  state = { background: '' }
  componentDidMount() {
    setTimeout(function () {
      this.setState({
        background: 'true'
      })
    }.bind(this), 6500)
  }
  render() {
    return <div>
      <View background={this.state.background} />
      {/* <Navigator /> */}
    </div>

  }
}

export default Home