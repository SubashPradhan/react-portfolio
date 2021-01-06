import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import Subash from '../../assets/subash.jpg';
import SubashLogo from '../../assets/subash-logo.svg';
import '../../Style/Navbar.css';

export default function View(props) {
	const { handleMenu, showMenu, showMenuWrapper } = props;

	const navLinksContents = (
		<div className="navbar-links-contents">
			<a href="#home" className="navbar-links">
				{'/* Home */'}
			</a>
			<a href="#about" className="navbar-links">
				{'{ About Me }'}
			</a>
			<a href="#portfolio" className="navbar-links">
				{'< Portfolio />'}
			</a>
			<a href="#skills" className="navbar-links">
				[ Skills ]
			</a>
			<a href="#contact" className="navbar-links">
				" Contact "
			</a>
		</div>
	);

	const socialLinks = (
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
	);

	return (
		<div className="navigation-container">
			<div
				className={
					showMenu
						? 'navbar-show navbar-container'
						: ' navbar-hide navbar-container'
				}
			>
				<div className="personal-img">
					<img
						src={Subash}
						alt="Subash Pradhan"
						className="subash-img"
						title="Subash Pradhan"
					></img>
				</div>
				{navLinksContents}
				{socialLinks}
			</div>

			<div
				className={
					!showMenu && showMenuWrapper
						? 'menu-wrapper menu-wrapper-scroll'
						: 'menu-wrapper'
				}
			>
				<div className="subash-logo">
					<a href="#home">
						<img
							src={SubashLogo}
							title="Subash Pradhan"
							alt="Subash Logo"
							className={
								showMenu
									? 'hide'
									: showMenuWrapper
									? 'subash-logo-img-scroll'
									: 'subash-logo-img'
							}
						/>
					</a>
				</div>
				<div className="menu-container" onClick={e => handleMenu(e)}>
					<div
						className={showMenu ? 'burger-line-one-clicked' : 'burger-line-one'}
					></div>
					<div
						className={showMenu ? 'burger-line-two-clicked' : 'burger-line-two'}
					></div>
					<div
						className={
							showMenu ? 'burger-line-three-clicked' : 'burger-line-three'
						}
					></div>
				</div>
			</div>
		</div>
	);
}
