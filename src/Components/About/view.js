import React from 'react';
import Tada from 'react-reveal/Tada';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import WorkIcon from '@material-ui/icons/Work';
import HotelIcon from '@material-ui/icons/Hotel';
import EuroIcon from '@material-ui/icons/Euro';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import 'react-vertical-timeline-component/style.min.css';
import '../../Style/About.css';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';

export default function View() {
	return (
		<div className="about-me-container">
			<Tada>
				<h1>{'{ About me }'}</h1>
			</Tada>

			<VerticalTimeline>
				<VerticalTimelineElement
					className="vertical-timeline-element"
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="2021 - present"
					iconStyle={{ background: 'green', color: '#fff' }}
					icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						Nylas - Sr. Developer Support Engineer / Production Support Lead.
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Remote (Full Time)
					</h4>
					<p>
					Nylas is a API company that provides true power of communications for developers
					to build applications that integrate with multiple email, calendar, and contacts 
					sources such as Gmail, Microsoft Exchange, and more. 
					Our tools remove complexity and empower developers to build world-class user
					experiences with embedded email and scheduling capabilities.
					As a developer support engineer our job is to ensure Nylas integration goes smooth
					and help developers with any issues with Nylas APIs.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element"
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="2018 - 2021"
					iconStyle={{ background: '#d13ca4', color: '#fff' }}
					icon={<SupervisedUserCircleIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						Appen - Social media evaluator.
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Remote (part-time)
					</h4>
					<p>
						A project-based company, where we evaluate web pages and social
						media feeds so we can better understand the News Feed ecosystem and
						work to improve the News Feed experience for everyone. Also feeding
						data for research and device training purposes to develop
						next-generation AI technologies. Working with high accuracy rate
						consistently is a must have.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2019 - 2019"
					iconStyle={{ background: '#7fc3c0', color: '#fff' }}
					icon={<CastForEducationIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						Codaisseur - Full stack developer.
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Amsterdam, Netherlands
					</h4>
					<p>
						11 weeks of intense bootcamp where we learn by doing. Worked in a
						team using agile-scrum methodologies to implement new features in
						real-world projects from Codaisseur. We use CI/CD pipelines using
						version control tools like Git. We learned to work with React,
						Redux, Expressjs, Nodejs (incl. ES6), GraphQL, REST and more. More
						importantly, I learned to make full-stack apps with different new
						technologies which are deployed on a platform like Netlify, Heroku..
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2017 - 2018"
					iconStyle={{ background: '#b9925e', color: '#fff' }}
					icon={<HotelIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						Diagnosed with tuberculosis, moved to Haarlem.
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Haarlem, Netherlands
					</h4>
					<p>
						Being diagnosed with tuberculosis lead me to rest home for more than
						6 months and isolated, which was a major setback for my professional
						and personal career. Also moved to Haarlem for better housing.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2016 - 2017"
					iconStyle={{ background: 'blue', color: '#fff' }}
					icon={<CastForEducationIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						New York Code & Design Academy.
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Amsterdam, Netherlands
					</h4>
					<p>
						As my interest grew in web development while I was setting up in
						Amsterdam, to pursue my passion as a software developer and to taste
						coding I joined NYCDA that was 96 hours of course for HTML, CSS, JS
						including bootstrap, SAAS. This is where I started my journey for
						web development.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2015 - 2016"
					iconStyle={{ background: '#befc03', color: '#fff' }}
					icon={<EuroIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						Moved to Amsterdam.
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Amsterdam, Netherlands
					</h4>
					<p>
						Moved to Amsterdam to find a job and to support myself. Worked in
						Wagamama as a teamleader for a while.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="August 2013"
					iconStyle={{ background: '#fc6f03', color: '#fff' }}
					icon={<FlightTakeoffIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						Landed in the Netherlands.
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Arnhem, Netherlands
					</h4>
					<p>
						Came to the Netherlands for my bachelors in automotive engineering.
						Completed a year successfully.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2010 - 2013"
					iconStyle={{ background: 'black', color: '#fff' }}
					icon={<LaptopMacIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						Software Systems Nepal - Technical officer.
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Kathmandu, Nepal
					</h4>
					<p>
						With my passion for computers and the technologies soon after my
						college, I joined Software Systems Nepal, an accounting software
						company where I supported end-users problems regarding software
						bugs, installations, networking and build customer retention rates
						with the best services.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement iconStyle={{ background: 'red' }} />
			</VerticalTimeline>
		</div>
	);
}
