import React, { Component } from 'react'
import View from './view'
import Social from './social-share'

class Contact extends Component {
  render() {
    const onSubmit = data => { console.log(data) }
    return <div>
      <View onSubmit={onSubmit} />
      <Social />
    </div>
  }
}
export default Contact