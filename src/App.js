import React, { Component } from 'react';
import Navigator from './Components/Home/Navigator'
import Background from './Components/Home/Background';
import Main from './Components/Main';

class App extends Component {
  render() {
    return <div>
      <Navigator />
      <Background />
      <Main />
    </div>
  }
}

export default App
