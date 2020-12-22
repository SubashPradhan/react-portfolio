import React from 'react';
import '../Style/Skill.css';
import SkillBar from 'react-skillbars';
import Tada from 'react-reveal/Tada';

export default function View(props) {
	const { skills, skillColors } = props;
	return (
		<div align="center">
			<Tada>
				<h1>Skills</h1>
			</Tada>
			<div className="skills" align="center">
				<SkillBar
					skills={skills}
					colors={skillColors}
					animationDuration={2000}
				/>
			</div>
		</div>
	);
}
