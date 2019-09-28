import React, { Component } from 'react'
import View from './view'

class Contact extends Component {
  render() {
    const onSubmit = data => { console.log(data) }
    return <div>
      <View onSubmit={onSubmit} />
    </div>
  }
}
export default Contact