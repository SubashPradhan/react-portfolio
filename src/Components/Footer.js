import React from 'react';
import './Style/App.css';

export default function Footer() {
	return (
		<div>
			<div className="footer">
				© {new Date().getFullYear()} Subash Pradhan
				<span role="img" aria-label="cool">
					{' '}
					🤙{' '}
				</span>
			</div>
		</div>
	);
}
