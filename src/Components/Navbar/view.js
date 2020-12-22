import React from 'react';
import { Link } from 'react-router-dom';
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
					<Link to="/home" className="navbar-links">
						Home
					</Link>
					<Link to="/about" className="navbar-links">
						About
					</Link>
					<Link to="/portfolio" className="navbar-links">
						Portfolio
					</Link>
					<Link to="/contact" className="navbar-links">
						Contact
					</Link>
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
