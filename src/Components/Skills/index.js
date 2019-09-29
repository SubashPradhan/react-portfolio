import React, { Component } from 'react'
import View from './view'

const SKILLS = [
  {
    "type": "HTML",
    "level": 95,
    color:{
      "bar": "green"
    }
  },
  {
    "type": "CSS",
    "level": 90,
    color:{
      "bar": "green"
    }
  },
  {
    "type": "Javascript",
    "level": 90,
    color:{
      "bar": "green"
    }
  },
  {
    "type": "Jquery",
    "level": 75,
  },
  {
    "type": "React",
    "level": 80,
    color:{
      "bar": "green"
    }
  },
  {
    "type": "Redux",
    "level": 70,
    color:{
      "bar": "yelow"
    }
  },
  {
    "type": "Vue",
    "level": 80,
    color:{
      "bar": "green"
    }
  },
  {
    "type": "SQL",
    "level": 60
  },
  {
    "type": "Express",
    "level": 80,
    color:{
      "bar" : "green"
    }
  },
  {
    "type": "Sequelize",
    "level": 70,
  },
  {
    "type": "Frontend",
    "level": 85,
    color:{
      "bar": "green"
    }
  },
  {
    "type": "Backend",
    "level": 80,
    color:{
      "bar": "green"
    }
  }
]
const colors = {
  // "bar": "black",
  "title": {
    "text": "#fff",
    "background": "#3d4747"
  }
}

class Skills extends Component {
  render() {
    return <View skills={SKILLS} colors={colors} />
  }
}

export default Skills