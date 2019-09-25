import React, { Component } from 'react';
import View from '../Portfolio/view';

const IMAGES =
  [{
    src: require('../images/movie-app.gif'),
    thumbnail: require('../images/movie-thumb.png'),
    thumbnailWidth: 700,
    thumbnailHeight: 250,
    tags: [{ value: "Movie-app", title: "Movie-app" }],
    caption: "Simple movie- search app for two days Hackathon at Codaisseur.HACKATHON-PROJECT - Vue CLI, Vuetify, Axios "
    
  },
  {
    src: require('../images/gitgud.gif'),
    thumbnail: require('../images/gitgud.png'),
    thumbnailWidth: 700,
    thumbnailHeight: 250,
    tags: [{ value: "Git-gud", title: "Git-gud" }],
    caption: "A validator of your GitHub profile and Git use, designed to provide feedback for job seekers and graduated students.REAL WORLD PROJECT - GraphQl, React-Apollo, Face-api"
  },

  {
    src: require('../images/fullstack.gif'),
    thumbnail: require('../images/first-react.png'),
    thumbnailWidth: 600,
    thumbnailHeight: 250,
    tags: [{ value: "First-fullstack-app", title: "FullStack" }],
    caption: "My Very first FullStack App. GROUP PROJECT - Sequelize, Express, React, Redux, Rest-Api "
    
  },
  {
    src: require('../images/hangman.gif'),
    thumbnail: require('../images/hangman.png'),
    thumbnailWidth: 600,
    thumbnailHeight: 250,
    tags: [{ value: "Hangaman-game", title: "Hangaman" }],
    caption: "A fullstack Hangman game with logins.GROUP-PROJECT - Express, Sequelize, Bcrypt, Jsonwebtoken, React, Redux"
  },
  {
    src: require('../images/html-portfolio.gif'),
    thumbnail: require('../images/html-portfolio.png'),
    thumbnailWidth: 600,
    thumbnailHeight: 250,
    tags: [{ value: "Plain-HTML-Portfolio", title: "First-PortFolio" }],
    caption: "My very first portfolio using plain HTML, CSS, Javascript, Jquery."
  }
]

class Portfolio extends Component {
  render() {
    return <View images={IMAGES} />
  }
}

export default Portfolio