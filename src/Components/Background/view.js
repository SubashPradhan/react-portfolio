import React from 'react';
import '../Style/Background.css';

export default function View(props) {
	const {
		randomLettersContainer,
		randomLettersRefRight,
		randomLettersRefLeft,
	} = props;
	return (
		<div ref={randomLettersContainer} className="background-container">
			<div className="random-letters-left" ref={randomLettersRefLeft}>
				<span id="code">{'{code}'}</span>
				<span id="learn">{'{learn}'}</span>
				<span id="create">{'{design}'}</span>
				<span>{'[fun]'}</span>
			</div>
			<div className="random-letters-right" ref={randomLettersRefRight}>
				<span>{'[array] '}</span>
				<span id="share">{'{share}'}</span>
				<span id="code">{'{code}'}</span>
				<span id="grow">{'{grow}'}</span>
			</div>
		</div>
	);
}
