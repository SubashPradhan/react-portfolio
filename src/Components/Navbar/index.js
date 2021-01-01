import React, { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { handleMenuClick } from '../../actions/handleMenuClick';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.handleMenu = this.handleMenu.bind(this);

		this.state = {
			showMenuWrapper: false,
		};

		this.handleScrollView();
	}

	handleMenu(e) {
		e.stopPropagation();
		this.props.handleMenuClick();
	}

	handleScrollView() {
		const screenHeight = document.documentElement.clientHeight / 2;
		document.addEventListener('scroll', () => {
			if (window.pageYOffset > screenHeight) {
				this.setState({
					showMenuWrapper: true,
				});
			} else {
				this.setState({
					showMenuWrapper: false,
				});
			}
		});
	}

	render() {
		return (
			<View
				showMenu={this.props.showMenu}
				handleMenu={this.handleMenu}
				showMenuWrapper={this.state.showMenuWrapper}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		showMenu: state.showMenu,
	};
};

export default connect(mapStateToProps, { handleMenuClick })(Navbar);
