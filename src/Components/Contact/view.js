import React from 'react';
import { Fade } from 'react-reveal';
import '../../Style/Contact.css';

export default function View(props) {
	const { handleFocus, handleFocusOut } = props;
	return (
		<div className="contact-container">
			<Fade>
				<h1>"Contact"</h1>
			</Fade>
			<div className="form-container">
				<form className="form">
					<div className="field">
						<input
							className="form-input"
							onFocus={e => handleFocus(e)}
							onBlur={e => handleFocusOut(e)}
						></input>
						<label className="form-label">Name:</label>
					</div>

					<div className="field">
						<input
							className="form-input"
							onFocus={e => handleFocus(e)}
							onBlur={e => handleFocusOut(e)}
						></input>
						<label className="form-label">Email:</label>
					</div>

					<div className="field">
						<label className="textarea-label">Message:</label>
						<textarea className="form-textarea" />
					</div>
					<button>Submit</button>
				</form>
			</div>
		</div>
	);
}
