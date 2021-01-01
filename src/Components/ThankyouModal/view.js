import React from 'react';
import '../../Style/Modal.css';

export default function View(props) {
	const { handleClose } = props;
	return (
		<div className="modal-container">
			<span className="close-btn" onClick={() => handleClose()}>
				X
			</span>
			<h3>Thank you for your feedback.</h3>
		</div>
	);
}
