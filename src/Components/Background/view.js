import React from 'react';
import '../../Style/Background.css';
import DragonballOne from '../../assets/DragonBall-1.svg';
import DragonballTwo from '../../assets/DragonBall-2.svg';
import DragonballThree from '../../assets/DragonBall-3.svg';
import DragonballFour from '../../assets/DragonBall-4.svg';
import DragonballFive from '../../assets/DragonBall-5.svg';
import DragonballSix from '../../assets/DragonBall-6.svg';
import DragonballSeven from '../../assets/DragonBall-7.svg';

export default function View(props) {
	const {
		randomLettersContainer,
		randomLettersRefRight,
		randomLettersRefLeft,
	} = props;
	return (
		<div ref={randomLettersContainer} className="background-container">
			<div className="random-letters-left" ref={randomLettersRefLeft}>
				<img src={DragonballOne} alt="Dragon ball" className="dragon-balls" />
				<img src={DragonballFour} alt="Dragon ball" className="dragon-balls" />
				<img src={DragonballFive} alt="Dragon ball" className="dragon-balls" />
				<img src={DragonballSeven} alt="Dragon ball" className="dragon-balls" />
			</div>
			<div className="random-letters-right" ref={randomLettersRefRight}>
				<img src={DragonballTwo} alt="Dragon ball" className="dragon-balls" />
				<img src={DragonballThree} alt="Dragon ball" className="dragon-balls" />
				<img src={DragonballSix} alt="Dragon ball" className="dragon-balls" />
			</div>
		</div>
	);
}
