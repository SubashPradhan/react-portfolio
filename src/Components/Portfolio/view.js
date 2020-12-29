import React from 'react';
import MovieApp from '../../assets/movie-app.png';
import QuizApp from '../../assets/quiz-app.png';
import ProjectManagementApp from '../../assets/project-management.png';
import CoronaUpdatesApp from '../../assets/corona-updates.png';
import Carousel from '../../assets/3d-carousel.png';
import HtmlPortfolio from '../../assets/html-portfolio.png';
import { Fade } from 'react-reveal';
import Tada from 'react-reveal/Tada';
import '../Style/Portfolio.css';

export default function View(props) {
	const { portfolioRef } = props;
	return (
		<div className="portfolio-container">
			<Tada>
				<h1>{'< Portfolio />'}</h1>
			</Tada>
			<div className="portfolio-collections" ref={portfolioRef}>
				<div className="portfolio">
					<h3 className="portfolio-title">Corona Updates</h3>
					<img
						src={CoronaUpdatesApp}
						title="Corona Updates App"
						alt="Corona Updates App"
						className="portfolio-img"
					/>
					<button className="portfolio-btn">
						<a
							href="https://covid-19-updates.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-links"
						>
							Go to the website
						</a>
					</button>
				</div>
				<div className="portfolio">
					<h3 className="portfolio-title">Project Management</h3>
					<img
						src={ProjectManagementApp}
						title="Project Management App"
						alt="Project Management App"
						className="portfolio-img"
					/>
					<button className="portfolio-btn">
						<a
							href="https://track-your-project.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-links"
						>
							Go to the website
						</a>
					</button>
				</div>
				<div className="portfolio">
					<h3 className="portfolio-title">3D Carousel</h3>
					<img
						src={Carousel}
						title="3d Carousel"
						alt="3d Carousel"
						className="portfolio-img"
					/>
					<button className="portfolio-btn">
						<a
							href="https://html-image-carousel.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-links"
						>
							Go to the website
						</a>
					</button>
				</div>
				<div className="portfolio">
					<h3 className="portfolio-title">Movie App</h3>
					<img
						src={MovieApp}
						title="Movie App"
						alt="Movie App"
						className="portfolio-img"
					/>
					<button className="portfolio-btn">
						<a
							href="https://movie-search-app.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-links"
						>
							Go to the website
						</a>
					</button>
				</div>
				<div className="portfolio">
					<h3 className="portfolio-title">Quiz App</h3>
					<img
						src={QuizApp}
						title="Quiz App Using TS"
						alt="Quiz App"
						className="portfolio-img"
					/>
					<button className="portfolio-btn">
						<a
							href="https://ts-quiz.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-links"
						>
							Go to the website
						</a>
					</button>
				</div>
				<div className="portfolio">
					<h3 className="portfolio-title">Html Portfolio</h3>
					<img
						src={HtmlPortfolio}
						title="First Portfolio Using HTML"
						alt="HTML Portfolio"
						className="portfolio-img"
					/>
					<button className="portfolio-btn">
						<a
							href="https://my-html-portfolio.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-links"
						>
							Go to the website
						</a>
					</button>
				</div>
			</div>
		</div>
	);
}
