import React, { Component } from 'react';
import View from './view';
class Navbar extends Component {
	constructor(props) {
		super(props);
		this.handleMenu = this.handleMenu.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
		this.state = {
			menuClicked: false,
		};
	}

	componentDidMount() {
		// document.body.addEventListener('click', this.handleClickOutside);
	}

	handleMenu() {
		this.setState({
			menuClicked: !this.state.menuClicked,
		});
	}

	handleClickOutside() {
		if (this.state.menuClicked) {
			this.handleMenu();
		}
	}

	render() {
		return (
			<View menuClicked={this.state.menuClicked} handleMenu={this.handleMenu} />
		);
	}
}

export default Navbar;
