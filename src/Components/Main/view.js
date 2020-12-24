import React from 'react';
import Home from '../Home';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Skills from '../Skills';
import '../Style/Main.css';

export default function View() {
	return (
		<div className="main-container">
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
