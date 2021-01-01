import React, { Component } from 'react';
import Main from './Components/Main';
import { Route } from 'react-router-dom';

class App extends Component {
	render() {
		return <Route exact path="/" component={Main} />;
	}
}

export default App;
