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
		htmlElement.addEventListener('mouseenter', () => {
			const children = htmlElement.childNodes;
			children.forEach(child => {
				child.style.transform = 'translateZ(12rem)';
			});
		});
		htmlElement.addEventListener('mouseleave', () => {
			const children = htmlElement.childNodes;
			children.forEach(child => {
				child.style.transform = 'translateZ(0)';
			});
		});
	}

	handleMouseLeave(htmlElement) {}
	render() {
		return <View portfolioRef={this.portfolioRef} />;
	}
}

export default PortfolioNew;
