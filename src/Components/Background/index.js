import React, { Component } from 'react';
import View from './view';

class Background extends Component {
	constructor(props) {
		super(props);
		this.randomLettersContainer = React.createRef();
		this.randomLettersRefRight = React.createRef();
		this.randomLettersRefLeft = React.createRef();
	}

	componentDidMount() {
		const currentClientWidth = document.documentElement.clientWidth;
		const minWidthRight = currentClientWidth / 2;
		const maxWidthRight = currentClientWidth;
		const minWidthLeft = 0;
		const maxWidthLeft = minWidthRight;

		this.renderSymbols(this.randomLettersRefLeft, minWidthLeft, maxWidthLeft);
		this.renderSymbols(
			this.randomLettersRefRight,
			minWidthRight,
			maxWidthRight,
		);

		const arrayOfChildNodesLeft = Array.from(
			this.randomLettersRefLeft.current.childNodes,
		);
		const arrayOfChildNodesRight = Array.from(
			this.randomLettersRefRight.current.childNodes,
		);

		this.handleScroll(arrayOfChildNodesLeft, arrayOfChildNodesRight);
	}

	getRandomNumber(min = 0, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	renderSymbols(reference, minScreenSize, maxScreenSize) {
		const childNodes = reference.current.childNodes;
		const arrayOfChildNodes = Array.from(childNodes);
		const currentClientHeight = document.documentElement.clientHeight;
		let animationDelay = 0.2;

		arrayOfChildNodes.forEach(child => {
			const randomPositionHeight = this.getRandomNumber(0, currentClientHeight);
			const randomPositionWidth = this.getRandomNumber(
				minScreenSize,
				maxScreenSize,
			);
			child.style.animationDuration += `${animationDelay++}s`;
			child.style.position = 'fixed';
			child.style.top = `${randomPositionHeight}px`;
			child.style.left = `${randomPositionWidth}px`;
		});
	}

	handleScroll(leftNode, rightNode) {
		let startingDegreeRight = 0;
		let startingDegreeLeft = 0;
		let transformRight = 0;
		let transformLeft = 0;
		const transformIncrement = 0.1;
		const rotateIncrement = 0.5;
		let prevScrollY = window.pageYOffset;

		window.addEventListener('scroll', () => {
			leftNode.forEach(symbol => {
				symbol.style.transform = `translateY(${transformLeft}px) rotate(${startingDegreeLeft}deg)`;
				startingDegreeLeft =
					window.scrollY > prevScrollY
						? startingDegreeLeft + rotateIncrement
						: startingDegreeLeft - rotateIncrement;
				transformLeft =
					window.scrollY > prevScrollY
						? transformLeft + transformIncrement
						: transformLeft - transformIncrement;
			});
			rightNode.forEach(symbol => {
				symbol.style.transform = `translateY(${transformRight}px) rotate(${startingDegreeRight}deg)`;
				startingDegreeRight =
					window.scrollY < prevScrollY
						? startingDegreeRight + rotateIncrement
						: startingDegreeRight - rotateIncrement;
				transformRight =
					window.scrollY < prevScrollY
						? transformRight + transformIncrement
						: transformRight - transformIncrement;
			});
			prevScrollY = window.pageYOffset;
		});
	}

	render() {
		return (
			<View
				randomLettersContainer={this.randomLettersContainer}
				randomLettersRefRight={this.randomLettersRefRight}
				randomLettersRefLeft={this.randomLettersRefLeft}
			/>
		);
	}
}

export default Background;
