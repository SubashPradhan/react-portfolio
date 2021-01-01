import React, { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';

import { handleMenuClick } from '../../actions/handleMenuClick';

class Main extends Component {
	constructor(props) {
		super(props);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}
	handleClickOutside() {
		const { showMenu, handleMenuClick } = this.props;
		showMenu && handleMenuClick();
	}

	render() {
		return <View handleClickOutside={this.handleClickOutside} />;
	}
}

const mapStateToProps = state => {
	return {
		showMenu: state.showMenu,
	};
};
export default connect(mapStateToProps, { handleMenuClick })(Main);
