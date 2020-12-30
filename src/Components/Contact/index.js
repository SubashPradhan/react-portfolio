import React, { Component } from 'react';
import View from './view';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleFocusOut = this.handleFocusOut.bind(this);
	}

	handleFocus(e) {
		const currentInput = e.target;
		console.log(currentInput);
		currentInput.classList.add('form-input-focus');
	}

	handleFocusOut(e) {
		const currentInput = e.target;
		currentInput.classList.remove('form-input-focus');
	}
	render() {
		return (
			<View
				handleFocus={this.handleFocus}
				handleFocusOut={this.handleFocusOut}
			/>
		);
	}
}

export default Contact;
