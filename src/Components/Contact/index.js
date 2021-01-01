import React, { Component } from 'react';
import { connect } from 'react-redux';
import emailjs from 'emailjs-com';
import { contactDetails } from '../contactDetails';
import { handleModal } from '../../actions/handleModal';
import View from './view';

class Contact extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			message: '',
			subject: 'Message From Portfolio',
			isName: false,
			isEmail: false,
			errorMessage: false,
		};
		this.handleFocus = this.handleFocus.bind(this);
		this.handleFocusOut = this.handleFocusOut.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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

	handleError() {
		const { name, message, email } = this.state;
		const checkFields = [name, message, email];
		const checkEmptyFields = checkFields.every(fields => fields);
		if (!checkEmptyFields) {
			this.setState({
				errorMessage: true,
			});
		} else {
			this.setState({
				errorMessage: false,
			});
		}
	}

	async handleSubmit(e) {
		e.preventDefault();
		this.props.handleModal();
		// this.setState({ showModal: true });
		// const { service, template, id } = contactDetails;
		// await this.handleError();
		// try {
		// 	if (!this.state.errorMessage) {
		// 		await emailjs.send(service, template, this.state, id);
		// 		this.setState({
		// 			name: '',
		// 			email: '',
		// 			message: '',
		// 			handleModal: true,
		// 		});
		// 	}
		// } catch (error) {
		// 	console.log(error);
		// }
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
				handleSubmit={this.handleSubmit}
				errorMessage={this.state.errorMessage}
				showModal={this.props.showModal}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		showModal: state.showModal,
	};
};
export default connect(mapStateToProps, { handleModal })(Contact);
