import React, { Component } from 'react';
import View from './view';

class PortfolioNew extends Component {
	constructor(props) {
		super(props);
		this.portfolioRef = React.createRef();
	}

	componentDidMount() {
		this.handlePortfolioHover(this.portfolioRef);
	}

	handlePortfolioHover(reference) {
		const childNodes = reference.current.childNodes;
		childNodes.forEach(child => {
			this.handleMouse(child);
		});
	}

	handleMouse(htmlElement) {
		const children = htmlElement.childNodes;
		htmlElement.addEventListener('mouseenter', () => {
			children.forEach(child => {
				child.style.transform = 'translateZ(10rem)';
			});
		});
		htmlElement.addEventListener('mouseleave', () => {
			children.forEach(child => {
				child.style.transform = 'translateZ(0)';
			});
		});
	}
	render() {
		return <View portfolioRef={this.portfolioRef} />;
	}
}

export default PortfolioNew;
