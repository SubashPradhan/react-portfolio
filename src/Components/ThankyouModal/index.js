import React, { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { handleModal } from '../../actions/handleModal';

class ThankyouModal extends Component {
	constructor(props) {
		super(props);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClose() {
		this.props.handleModal();
	}

	render() {
		return (
			<View showModal={this.props.showModal} handleClose={this.handleClose} />
		);
	}
}

export default connect(null, { handleModal })(ThankyouModal);
