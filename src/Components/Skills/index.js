import React, { Component } from 'react';
import View from './view';

const SKILLS = [
	{
		type: 'HTML5',
		level: 90,
		color: {
			bar: 'green',
		},
	},
	{
		type: 'CSS3',
		level: 90,
		color: {
			bar: 'green',
		},
	},
	{
		type: 'JAVASCRIPT',
		level: 90,
		color: {
			bar: 'green',
		},
	},
	{
		type: 'PYTHON',
		level: 70,
		color: {
			bar: 'green',
		},
	},
	{
		type: 'JQUERY',
		level: 80,
	},
	{
		type: 'REACT',
		level: 87,
		color: {
			bar: 'green',
		},
	},
	{
		type: 'REDUX',
		level: 70,
		color: {
			bar: 'yelow',
		},
	},
	{
		type: 'VUE',
		level: 80,
		color: {
			bar: 'green',
		},
	},
	{
		type: 'SQL',
		level: 60,
	},
	{
		type: 'NODEJS',
		level: 80,
	},
	{
		type: 'GRAPHQL',
		level: 60,
	},
	{
		type: 'TYPESCRIPT',
		level: 60,
	},
	{
		type: 'WEBPACKS',
		level: 80,
		color: {
			bar: 'green',
		},
	},
	{
		type: 'GIT',
		level: 85,
		color: {
			bar: 'green',
		},
	},
	{
		type: 'GITHUB',
		level: 85,
		color: {
			bar: 'green',
		},
	},
	{
		type: 'FRONTEND',
		level: 85,
		color: {
			bar: 'green',
		},
	},
	{
		type: 'BACKEND',
		level: 80,
		color: {
			bar: 'green',
		},
	},
];

const skillColors = {
	title: {
		background: '#7026b5',
	},
};

class Skills extends Component {
	render() {
		return <View skills={SKILLS} skillColors={skillColors} />;
	}
}

export default Skills;
