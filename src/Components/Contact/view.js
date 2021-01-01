import React from 'react';
import { Fade } from 'react-reveal';
import '../../Style/Contact.css';

export default function View(props) {
	const {
		value,
		isEmail,
		isName,
		handleChange,
		handleFocus,
		handleFocusOut,
		handleSubmit,
	} = props;
	const { name, email, message } = value;

	return (
		<div className="contact-container">
			<Fade>
				<h1>"Contact"</h1>
			</Fade>
			<div className="form-container">
				<form
					className="form"
					onSubmit={e => handleSubmit(e)}
					autoComplete="off"
				>
					<div className="field">
						<input
							className="form-input"
							id="name"
							type="text"
							value={name}
							onChange={e => handleChange(e, 'name')}
							onFocus={e => handleFocus(e)}
							onBlur={e => handleFocusOut(e)}
						></input>
						<label
							className={isName ? 'form-label form-label-focus' : 'form-label'}
							id="label-name"
						>
							Name:
						</label>
					</div>

					<div className="field">
						<input
							className="form-input"
							id="email"
							type="text"
							value={email}
							onChange={e => handleChange(e, 'email')}
							onFocus={e => handleFocus(e)}
							onBlur={e => handleFocusOut(e)}
						></input>
						<label
							className={isEmail ? 'form-label form-label-focus' : 'form-label'}
							id="label-email"
						>
							Email:
						</label>
					</div>

					<div className="field">
						<label className="textarea-label">
							Feedbacks are always appreciated.
						</label>
						<textarea
							className="form-textarea"
							value={message}
							placeholder="Your Feedbacks."
							onChange={e => handleChange(e, 'message')}
						/>
					</div>
					<button className="submit-btn">Submit</button>
				</form>
			</div>
		</div>
	);
}
