import React, { Component } from 'react';
import View from './view';

class Background extends Component {
	constructor(props) {
		super(props);
		this.randomLettersRefRight = React.createRef();
		this.randomLettersRefLeft = React.createRef();
	}

	componentDidMount() {
		const currentClientWidth = document.documentElement.clientWidth;
		const childNodesRight = this.randomLettersRefRight.current.childNodes;
		const arrayOfChildNodesRight = Array.from(childNodesRight);
		const minWidthRight = currentClientWidth - 400;
		const maxWidthRight = currentClientWidth - 20;
		this.renderSymbols(arrayOfChildNodesRight, minWidthRight, maxWidthRight);

		const childNodesLeft = this.randomLettersRefLeft.current.childNodes;
		const arrayOfChildNodesLeft = Array.from(childNodesLeft);
		const minWidthLeft = 10;
		const maxWidthLeft = 200;
		this.renderSymbols(arrayOfChildNodesLeft, minWidthLeft, maxWidthLeft);

		const allSymbols = arrayOfChildNodesRight.concat(arrayOfChildNodesLeft);
		let startingDegreeRight = 0;
		let startingDegreeLeft = -1;
		window.addEventListener('scroll', function () {
			console.log(window.scrollY);
			arrayOfChildNodesRight.forEach(symbol => {
				symbol.style.transform = `rotate(${startingDegreeRight}deg)`;
				startingDegreeRight += 0.2;
			});
			arrayOfChildNodesLeft.forEach(symbol => {
				symbol.style.transform = `rotate(${startingDegreeLeft}deg)`;
				startingDegreeLeft -= 0.2;
			});
		});
	}

	getRandomNumber(min = 0, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	renderSymbols(referenceArray, minScreenSize, maxScreenSize) {
		// Create symbols for right hand side
		const currentClientHeight = document.documentElement.clientHeight;
		referenceArray.forEach(child => {
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
	handleScroll(childOne, childTwo) {
		const combinedChildren = childOne.concat(childTwo);
		console.log(combinedChildren);
	}

	render() {
		return (
			<View
				randomLettersRefRight={this.randomLettersRefRight}
				randomLettersRefLeft={this.randomLettersRefLeft}
			/>
		);
	}
}

export default Background;
