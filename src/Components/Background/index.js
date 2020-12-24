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
		const maxWidthRight = currentClientWidth - 20;

		const minWidthLeft = 10;
		const maxWidthLeft = 200;
		this.renderSymbols(this.randomLettersRefLeft, minWidthRight, maxWidthRight);
		this.renderSymbols(this.randomLettersRefRight, minWidthLeft, maxWidthLeft);

		const arrayOfChildNodesLeft = Array.from(
			this.randomLettersRefLeft.current.childNodes,
		);
		const arrayOfChildNodesRight = Array.from(
			this.randomLettersRefRight.current.childNodes,
		);
		let startingDegreeRight = 0;
		let startingDegreeLeft = -1;
		let prevScrollY = window.pageYOffset;
		window.addEventListener('scroll', function () {
			console.log('prev', prevScrollY);
			arrayOfChildNodesRight.forEach(symbol => {
				symbol.style.transform = `translateY(${startingDegreeRight}px) rotate(${startingDegreeRight}deg)`;
				startingDegreeRight =
					window.scrollY < prevScrollY
						? startingDegreeRight + 0.15
						: startingDegreeRight - 0.15;
			});
			arrayOfChildNodesLeft.forEach(symbol => {
				symbol.style.transform = `translateY(${startingDegreeLeft}px) rotate(${startingDegreeRight}deg`;
				startingDegreeLeft =
					window.scrollY > prevScrollY
						? startingDegreeLeft + 0.15
						: startingDegreeLeft - 0.15;
			});
			prevScrollY = window.pageYOffset;
			console.log(window.pageYOffset);
		});
	}

	getRandomNumber(min = 0, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	renderSymbols(reference, minScreenSize, maxScreenSize) {
		const childNodes = reference.current.childNodes;
		const arrayOfChildNodes = Array.from(childNodes);
		const currentClientHeight = document.documentElement.clientHeight;
		arrayOfChildNodes.forEach(child => {
			const randomPositionHeight = this.getRandomNumber(0, currentClientHeight);
			const randomPositionWidth = this.getRandomNumber(
				minScreenSize,
				maxScreenSize,
			);
			child.style.position = 'fixed';
			child.style.top = `${randomPositionHeight}px`;
			child.style.left = `${randomPositionWidth}px`;
			child.style.padding = '2rem';
		});
	}

	// Check this later
	handleScroll(childOne, childTwo) {
		const combinedChildren = childOne.concat(childTwo);
		console.log(combinedChildren);
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
