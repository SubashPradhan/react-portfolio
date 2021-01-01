import React, { Component } from 'react';
import View from './view';

class ThankyouModal extends Component {
	constructor(props) {
		super(props);
		this.state = { showModal: false };
		this.handleClose = this.handleClose.bind(this);
	}

	handleClose() {
		console.log('clicked');
		this.setState({
			showModal: false,
		});
	}

	render() {
		return (
			<View showModal={this.state.showModal} handleClose={this.handleClose} />
		);
	}
}

export default ThankyouModal;
