import React, { Component } from 'react'
import View from './view'
import Social from './social-share'
import * as request from 'superagent'

class Contact extends Component {
  state = {
    name: '',
    error: false
  }

  onSubmit = async (data, e) => {
    e.preventDefault()
    const response = await request
      .post('https://desolate-eyrie-81399.herokuapp.com/mail')
      .send({ data })

    if (response.statusCode === 200) {
      try {
        await this.setState({
          error: true,
          name: data.name
        }) 
      } catch (error) {
        console.error(error)
      }
    }
  }

  render() {
    return <div>
      <View
        onSubmit={this.onSubmit}
        error={this.state.error}
        name={this.state.name}
      />
      <Social />
    </div>
  }
}
export default Contact