import React from 'react';
import '../Style/Navbar.css';

export default function View(props) {
	const { handleMenu, menuClicked } = props;
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
				</div>
			</div>
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
	);
}
