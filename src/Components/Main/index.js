import React, { Component } from 'react';
import View from './view';

class Main extends Component {
	constructor(props) {
		super(props);
		this.randomLettersRef = React.createRef();
	}

	componentDidMount() {
		const childNodes = this.randomLettersRef.current.childNodes;
		const arrayOfChildNodes = Array.from(childNodes);
		const currentClientHeight = document.documentElement.clientHeight;
		const currentClientWidth = document.documentElement.clientWidth;
		const minWidthRight = currentClientWidth - 400;
		const maxWidthRight = currentClientWidth - 20;

		// Create symbols for right hand side
		arrayOfChildNodes.forEach(child => {
			const randomPositionHeight = Math.floor(
				Math.random() * currentClientHeight,
			);
			const randomPositionWidth = Math.floor(
				Math.random() * (maxWidthRight - minWidthRight + 1) + minWidthRight,
			);

			child.style.position = 'fixed';
			child.style.top = `${randomPositionHeight}px`;
			child.style.left = `${randomPositionWidth}px`;
			child.style.color = 'red';
		});
	}
	render() {
		return <View randomLettersRef={this.randomLettersRef} />;
	}
}

export default Main;
