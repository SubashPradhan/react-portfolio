import React from 'react';
import MySvg from '../../assets/my-svg.svg';
import Typist from 'react-typist';
import '../../Style/Home.css';

export default function View() {
	return (
		<div className="home-container">
			<div className="image-container">
				<img
					src={MySvg}
					alt="Subash"
					className="home-img"
					title="Subash Pradhan"
				/>
			</div>
			<div className="welcome-text">
				<Typist cursor={{ show: false }}>
					Hi, I am Subash Pradhan.
					<br />
					- Sr. Support Engineer.
					<br />
					Welcome & Nice To Meet You.
				</Typist>
			</div>
		</div>
	);
}
