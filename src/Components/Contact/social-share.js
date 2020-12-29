import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import '../../Style/Social.css';

class Social extends Component {
	render() {
		return (
			<div className="social-icon-container">
				<SocialIcon
					url="https://www.linkedin.com/in/subash-pradhan-371979136/"
					className="icons"
				/>
				<SocialIcon url="https://github.com/SubashPradhan" className="icons" />
				<SocialIcon
					url="https://www.instagram.com/suprowilde/"
					className="icons"
				/>
			</div>
		);
	}
}

export default Social;
