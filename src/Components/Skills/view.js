import React from 'react';
import JSIcon from '../../assets/JS.svg';
import ReactIcon from '../../assets/react.svg';
import VueIcon from '../../assets/vue.svg';
import HTML5Icon from '../../assets/html5.svg';
import Css3Icon from '../../assets/css3.svg';
import NodeIcon from '../../assets/nodejs.svg';
import TsIcon from '../../assets/TS.svg';
import CodeIcon from '../../assets/coding.svg';
import FigmaIcon from '../../assets/figma.svg';
import Tada from 'react-reveal/Tada';
import { Fade } from 'react-reveal';
import '../../Style/Skill.css';

export default function View() {
	return (
		<div className="skills-container">
			<Tada>
				<h1>[ Skills ]</h1>
			</Tada>
			<div className="skills-collections">
				<Fade left>
					<div className="skills">
						<img
							src={HTML5Icon}
							className="skill-icons"
							title="HTML5"
							alt="HTML5"
						/>
					</div>
					<div className="skills">
						<img
							src={Css3Icon}
							className="skill-icons"
							title="Css3"
							alt="Css3"
						/>
					</div>
					<div className="skills">
						<img
							src={JSIcon}
							className="skill-icons"
							title="Javascript"
							alt="Javascript"
						/>
					</div>
				</Fade>
				<Fade right>
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
							src={TsIcon}
							className="skill-icons"
							title="TypeScript"
							alt="Typescript"
						/>
					</div>
					<div className="skills">
						<img
							src={NodeIcon}
							className="skill-icons"
							title="Nodejs"
							alt="Nodejs"
						/>
					</div>
				</Fade>
				<Fade bottom>
					<div className="skills">
						<img
							src={FigmaIcon}
							className="skill-icons"
							title="Figma"
							alt="Figma"
						/>
					</div>
					<div className="skills">
						<img
							src={CodeIcon}
							className="skill-icons"
							title="Love coding"
							alt="Coding"
						/>
					</div>
				</Fade>
			</div>
		</div>
	);
}
