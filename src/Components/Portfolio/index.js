import React, { Component } from 'react';
import View from '../Portfolio/view';

const IMAGES = [
	{
		src: require('../assets/movie-app.gif'),
		thumbnail: require('../assets/movie-thumb.png'),
		thumbnailWidth: 700,
		thumbnailHeight: 250,
		tags: [{ value: 'Movie-app', title: 'Movie-app' }],
		caption:
			'Simple movie-search app for two days Hackathon at Codaisseur. Hackathon project - Vue CLI, Vuetify, Axios ',
	},
	{
		src: require('../assets/gitgud.gif'),
		thumbnail: require('../assets/gitgud.png'),
		thumbnailWidth: 700,
		thumbnailHeight: 250,
		tags: [{ value: 'Git-gud', title: 'Git-gud' }],
		caption:
			'A validator of your GitHub profile and Git use, designed to provide feedback for job seekers and graduated students.Real Wrold Project- GraphQl, React-Apollo, Face-api',
	},

	{
		src: require('../assets/fullstack.gif'),
		thumbnail: require('../assets/first-react.png'),
		thumbnailWidth: 600,
		thumbnailHeight: 250,
		tags: [{ value: 'First-fullstack-app', title: 'FullStack' }],
		caption:
			'My Very first FullStack App. Group Project - Sequelize, Express, React, Redux, Rest-Api ',
	},
	{
		src: require('../assets/hangman.gif'),
		thumbnail: require('../assets/hangman.png'),
		thumbnailWidth: 600,
		thumbnailHeight: 250,
		tags: [{ value: 'Hangaman-game', title: 'Hangaman' }],
		caption:
			'A fullstack Hangman game with logins.Group Project - Express, Sequelize, Bcrypt, Jsonwebtoken, React, Redux',
	},
	{
		src: require('../assets/html-portfolio.gif'),
		thumbnail: require('../assets/html-portfolio.png'),
		thumbnailWidth: 600,
		thumbnailHeight: 250,
		tags: [{ value: 'Plain-HTML-Portfolio', title: 'First-PortFolio' }],
		caption:
			'My very first portfolio using plain HTML, CSS, Javascript, Jquery.',
	},
];

class Portfolio extends Component {
	render() {
		return <View images={IMAGES} />;
	}
}

export default Portfolio;
