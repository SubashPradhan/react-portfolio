import React, { Component } from 'react';
// import Navigator from './Components/Home/Navigator';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				{/* <Navigator /> */}
				<Main />
				<Footer />
			</div>
		);
	}
}

export default App;
