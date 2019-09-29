import React from 'react'
import '../Style/Skill.css'
import SkillBar from 'react-skillbars'
import Tada from 'react-reveal/Tada';

export default function View(props) {
  const { skills, colors } = props
  return <div>
    <Tada>
      <h1>Skills</h1>
    </Tada>
    <div className='skills'>
      < SkillBar skills={skills} colors={colors} animationDuration={2000} />
    </div>
  </div>
}