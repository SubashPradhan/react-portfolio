import React, { Component } from 'react';
import View from './view';
class Navbar extends Component {
	constructor(props) {
		super(props);
		this.handleMenu = this.handleMenu.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
		this.state = {
			menuClicked: false,
			showMenuWrapper: false,
		};

		this.handleScrollView();
		this.handleClickOutside();
		this.handleMenu();
	}

	handleMenu() {
		this.setState({
			menuClicked: !this.state.menuClicked,
		});
	}

	handleClickOutside() {
		document.addEventListener('click', () => {
			this.state.menuClicked && this.handleMenu();
		});
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

	handleC;

	render() {
		return (
			<View
				menuClicked={this.state.menuClicked}
				handleMenu={this.handleMenu}
				showMenuWrapper={this.state.showMenuWrapper}
			/>
		);
	}
}

export default Navbar;
