import React from 'react';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Skills from '../Skills';
import Portfolio from '../Portfolio';
import '../../Style/Main.css';
import Navbar from '../Navbar';
import Background from '../Background';
import Footer from '../Footer';

export default function View(props) {
	const { handleClickOutside } = props;
	return (
		<div className="main-container" onClick={() => handleClickOutside()}>
			<Navbar />
			<Background />
			<section id="home">
				<Home />
			</section>
			<section id="about">
				<About />
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
			<Footer />
		</div>
	);
}
