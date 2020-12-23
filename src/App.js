import React, { Component } from 'react';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Navbar />
				<Route exact path="/" component={Main} />
				<Footer />
			</div>
		);
	}
}

export default App;
