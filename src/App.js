import React, { Component } from 'react';
import Navigator from './Components/Home/Navigator'
import Background from './Components/Home/Background';
import Main from './Components/Main';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return <div>
      <Navigator /> 
      <Background />
      <Main />
      <Footer />
    </div>
  }
}

export default App
