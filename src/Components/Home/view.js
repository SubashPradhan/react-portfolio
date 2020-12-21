import React from 'react';
import '../Style/Home.css';
import Typist from 'react-typist';
// import Subash from '../images/subash.jpg';
import MySvg from '../assets/my-svg.svg';

export default function View() {
	return (
		<div className="home-container">
			<img
				src={MySvg}
				alt="Subash"
				className="home-img"
				title="Subash Pradhan"
			/>
			<Typist cursor={{ show: false }}>
				<div className="welcome-text">
					Hi, I am Subash Pradhan.
					<br />
					- Web Developer.
					<br />
					Welcome & Nice To Meet You.
				</div>
			</Typist>
		</div>
	);
}
