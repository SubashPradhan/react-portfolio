import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Skills from './Skills';
import '../Components/Style/App.css';

class Main extends Component {
	render() {
		return (
			<div>
				<section id="home">
					<Home />
				</section>
				<section id="about">
					<About id="about" />
				</section>
				<section id="portfolio">
					<Portfolio />
				</section>
				<section id="skills">
					<Skills />
				</section>
				<section id="contact">
					<Contact />
				</section>
			</div>
		);
	}
}

export default Main;
