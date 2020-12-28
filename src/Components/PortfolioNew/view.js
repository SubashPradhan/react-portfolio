import React from 'react';
import MovieApp from '../../assets/movie-thumb.png';
import QuizApp from '../../assets/quiz-app.png';
import ProjectManagementApp from '../../assets/project-management.png';
import CoronaUpdatesApp from '../../assets/corona-updates.png';
import Carousel from '../../assets/3d-carousel.png';
import HtmlPortfolio from '../../assets/html-portfolio.png';
import '../Style/Portfolio.css';

export default function View() {
	return (
		<div className="portfolio-container">
			<h1>Subash Portfolio</h1>
			<div className="portfolio-collections">
				<div className="portfolio">
					<h3 className="portfolio-title">Corona Updates</h3>
					<img
						src={CoronaUpdatesApp}
						title="Corona Updates App"
						alt="Corona Updates App"
						className="portfolio-img"
					/>
					<button className="portfolio-btn">Go to the website</button>
				</div>
				<div className="portfolio">
					<h3 className="portfolio-title">Project Management</h3>
					<img
						src={ProjectManagementApp}
						title="Project Management App"
						alt="Project Management App"
						className="portfolio-img"
					/>
					<button className="portfolio-btn">Go to the website</button>
				</div>
				<div className="portfolio">
					<h3 className="portfolio-title">3D Carousel</h3>
					<img
						src={Carousel}
						title="3d Carousel"
						alt="3d Carousel"
						className="portfolio-img"
					/>
					<button className="portfolio-btn">Go to the website</button>
				</div>
				<div className="portfolio">
					<h3 className="portfolio-title">Movie App</h3>
					<img
						src={MovieApp}
						title="Movie App"
						alt="Movie App"
						className="portfolio-img"
					/>
					<button className="portfolio-btn">Go to the website</button>
				</div>
				<div className="portfolio">
					<h3 className="portfolio-title">Quiz App</h3>
					<img
						src={QuizApp}
						title="Quiz App Using TS"
						alt="Quiz App"
						className="portfolio-img"
					/>
					<button className="portfolio-btn">Go to the website</button>
				</div>
				<div className="portfolio">
					<h3 className="portfolio-title">HTML Portfolio</h3>
					<img
						src={HtmlPortfolio}
						title="First Portfolio Using HTML"
						alt="HTML Portfolio"
						className="portfolio-img"
					/>
					<button className="portfolio-btn">Go to the website</button>
				</div>
			</div>
		</div>
	);
}
