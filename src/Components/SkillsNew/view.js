import React from 'react';
import JSIcon from '../../assets/JS.svg';
import ReactIcon from '../../assets/react.svg';
import VueIcon from '../../assets/vue.svg';
import HTML5Icon from '../../assets/html5.svg';
import Css3Icon from '../../assets/css3.svg';
import NodeIcon from '../../assets/nodejs.svg';
import '../Style/Skill.css';

export default function View() {
	return (
		<div className="skills-container">
			<h1>Skills {'</>'}</h1>
			<div className="skills-collections">
				<div className="skills">
					<img
						src={HTML5Icon}
						className="skill-icons"
						title="HTML5"
						alt="HTML5"
					/>
				</div>
				<div className="skills">
					<img src={Css3Icon} className="skill-icons" title="Css3" alt="Css3" />
				</div>
				<div className="skills">
					<img
						src={JSIcon}
						className="skill-icons"
						title="Javascript"
						alt="Javascript"
					/>
				</div>
				<div className="skills">
					<img
						src={ReactIcon}
						className="skill-icons"
						title="React"
						alt="React"
					/>
				</div>
				<div className="skills">
					<img src={VueIcon} className="skill-icons" title="Vue" alt="Vue" />
				</div>
				<div className="skills">
					<img
						src={NodeIcon}
						className="skill-icons"
						title="Nodejs"
						alt="Nodejs"
					/>
				</div>
			</div>
		</div>
	);
}
