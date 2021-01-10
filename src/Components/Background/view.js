import React from 'react';
import '../../Style/Background.css';
import PuzzleRed from '../../assets/puzzle-red.svg';
import PuzzleBlue from '../../assets/puzzle-blue.svg';
import PuzzleGreen from '../../assets/puzzle-green.svg';
import PuzzleYellow from '../../assets/puzzle-yellow.svg';
import SemiCircle from '../../assets/semi-circle.svg';
import Hexagon from '../../assets/hexagon.svg';
import Triangle from '../../assets/triangle.svg';
import Star from '../../assets/star.svg';

export default function View(props) {
	const {
		randomLettersContainer,
		randomLettersRefRight,
		randomLettersRefLeft,
	} = props;

	const confettis = (
		<>
			<img src={PuzzleBlue} alt="Background confettis" className="confettis" />
			<img src={PuzzleGreen} alt="Background confettis" className="confettis" />
			<img src={PuzzleRed} alt="Background confettis" className="confettis" />
			<img
				src={PuzzleYellow}
				alt="Background confettis"
				className="confettis"
			/>
			<img src={SemiCircle} alt="Background confettis" className="confettis" />
			<img src={Triangle} alt="Background confettis" className="confettis" />
			<img src={Star} alt="Background confettis" className="confettis" />
			<img src={Hexagon} alt="Background confettis" className="confettis" />
		</>
	);
	return (
		<div ref={randomLettersContainer} className="background-container">
			<div className="random-letters-left" ref={randomLettersRefLeft}>
				{confettis}
			</div>
			<div className="random-letters-right" ref={randomLettersRefRight}>
				{confettis}
			</div>
		</div>
	);
}
