import React, { Component } from 'react';
import View from './view';

class Contact extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			message: '',
			isName: false,
			isEmail: false,
		};
		this.handleFocus = this.handleFocus.bind(this);
		this.handleFocusOut = this.handleFocusOut.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e, field) {
		const { value } = e.target;
		this.setState({
			[field]: value,
		});
	}

	handleFocus(e) {
		const currentInput = e.target;
		const currentId = e.target.id;
		if (currentId === 'name' || this.state.name) {
			this.setState({
				isName: true,
			});
		}
		if (currentId === 'email' || this.state.email) {
			this.setState({
				isEmail: true,
			});
		}
		currentInput.classList.add('form-input-focus');
	}

	handleFocusOut(e) {
		const currentInput = e.target;
		if (!this.state.name) {
			this.setState({
				isName: false,
			});
		}
		if (!this.state.email) {
			this.setState({
				isEmail: false,
			});
		}
		currentInput.classList.remove('form-input-focus');
	}

	render() {
		return (
			<View
				value={this.state}
				isName={this.state.isName}
				isEmail={this.state.isEmail}
				handleChange={this.handleChange}
				handleFocus={this.handleFocus}
				handleFocusOut={this.handleFocusOut}
			/>
		);
	}
}

export default Contact;
