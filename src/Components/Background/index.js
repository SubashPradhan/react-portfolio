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
		const minWidthRight = currentClientWidth - 400;
		const maxWidthRight = currentClientWidth - 50;
		const minWidthLeft = 20;
		const maxWidthLeft = 400;

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
		let animationDelay = 0.3;
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
			child.style.padding = '2rem';
		});
	}

	// Check this later
	handleScroll(arrayOfChildNodesLeft, arrayOfChildNodesRight) {
		let startingDegreeRight = 0;
		let startingDegreeLeft = 0;
		const currentClientHeight = document.documentElement.clientHeight / 2;
		let prevScrollY = window.pageYOffset;

		window.addEventListener('scroll', () => {
			arrayOfChildNodesLeft.forEach(symbol => {
				symbol.style.transform = `translateY(${startingDegreeLeft}px) rotate(${startingDegreeRight}deg`;
				startingDegreeLeft =
					window.scrollY > prevScrollY
						? startingDegreeLeft + 0.15
						: startingDegreeLeft - 0.15;
			});
			arrayOfChildNodesRight.forEach(symbol => {
				symbol.style.transform = `translateY(${startingDegreeRight}px) rotate(${startingDegreeRight}deg)`;
				startingDegreeRight =
					window.scrollY < prevScrollY
						? startingDegreeRight + 0.15
						: startingDegreeRight - 0.15;
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
