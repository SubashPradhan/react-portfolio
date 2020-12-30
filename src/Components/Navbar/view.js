import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import Subash from '../../assets/subash.jpg';
import '../../Style/Navbar.css';

export default function View(props) {
	const { handleMenu, menuClicked, showMenuWrapper } = props;

	return (
		<div className="navigation-container">
			<div
				className={
					menuClicked
						? 'navbar-show navbar-container'
						: ' navbar-hide navbar-container'
				}
			>
				<div className="navbar-links-contents">
					<a href="#home" className="navbar-links">
						Home
					</a>
					<a href="#about" className="navbar-links">
						About
					</a>
					<a href="#portfolio" className="navbar-links">
						Portfolio
					</a>
					<a href="#contact" className="navbar-links">
						Contact
					</a>
					<div className="personal-social-profiles">
						<div>
							<a
								href="https://www.linkedin.com/in/subash-pradhan-371979136/"
								target="_blank"
								title="Subash LinkedIn Profile"
								rel="noopener noreferrer"
								className="icons-anchor"
							>
								<LinkedInIcon fontSize="large" id="linkedIn-icon" />
							</a>
						</div>
						<div>
							<a
								href="https://www.instagram.com/suprowilde/"
								target="_blank"
								title="Subash Instagram Profile"
								rel="noopener noreferrer"
								className="icons-anchor"
							>
								<InstagramIcon fontSize="large" id="instagram-icon" />
							</a>
						</div>
						<div>
							<a
								href="https://github.com/SubashPradhan"
								target="_blank"
								title="Subash Github Profile"
								rel="noopener noreferrer"
								className="icons-anchor"
							>
								<GitHubIcon fontSize="large" id="github-icon" />
							</a>
						</div>
					</div>
				</div>
				<div className="personal-img">
					<img
						src={Subash}
						alt="Subash Pradhan"
						className="subash-img"
						title="Subash Pradhan"
					></img>
				</div>
			</div>
			<div
				className={
					showMenuWrapper && !menuClicked ? 'menu-wrapper' : 'menu-wrapper-hide'
				}
			>
				<div className="menu-container" onClick={() => handleMenu()}>
					<div
						className={
							menuClicked ? 'burger-line-one-clicked' : 'burger-line-one'
						}
					></div>
					<div
						className={
							menuClicked ? 'burger-line-two-clicked' : 'burger-line-two'
						}
					></div>
					<div
						className={
							menuClicked ? 'burger-line-three-clicked' : 'burger-line-three'
						}
					></div>
				</div>
			</div>
		</div>
	);
}
