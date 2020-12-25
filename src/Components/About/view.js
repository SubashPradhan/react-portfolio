import React from 'react';
import Tada from 'react-reveal/Tada';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import WorkIcon from '@material-ui/icons/Work';
import HotelIcon from '@material-ui/icons/Hotel';
import EuroIcon from '@material-ui/icons/Euro';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import 'react-vertical-timeline-component/style.min.css';
import '../Style/About.css';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';

export default function View() {
	return (
		<div className="about-me-container">
			<Tada>
				<h1>About me</h1>
			</Tada>

			<VerticalTimeline>
				<VerticalTimelineElement
					className="vertical-timeline-element"
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="2018 - present"
					iconStyle={{ background: '#cf993c', color: '#fff' }}
					icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						Social media evaluator (Appen)
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Remote(part-time)
					</h4>
					<p>
						A project-based company, where we evaluate web pages and social
						media feeds so we can better understand the News Feed ecosystem and
						work to improve the News Feed experience for everyone. Also feeding
						data for research and device training purposes to develop
						next-generation AI technologies. Working with 80% of accuracy rate
						consistently is a must have.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2019 - 2019"
					iconStyle={{ background: 'green', color: '#fff' }}
					icon={<CastForEducationIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						Codaisseur (Full-stack developer)
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
					iconStyle={{ background: 'green', color: '#fff' }}
					icon={<HotelIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						Diagnosed with tuberculosis, moved to Haarlem, Netherlands
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Amsterdam, Netherlands
					</h4>
					<p>
						Sadly, got diagnosed with tuberculosis lead me to rest home for more
						than 6 months and Isolated, which was a major setback for my
						professional and personal Career. Also moved to Haarlem for better
						housing.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2016 - 2017"
					iconStyle={{ background: 'green', color: '#fff' }}
					icon={<CastForEducationIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						NYCDA (New York Code & Design Academy)
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Amsterdam, Netherlands
					</h4>
					<p>
						Being intrested in Web Development, as I was setting up myself in
						Amsterdam, to pursue my passion in web development and to taste
						coding I joined NYCDA that was 96 hours of course for HTML, CSS, JS
						including bootstrap, SAAS. This is where I started my journey for
						web development.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2015 - 2016"
					iconStyle={{ background: 'green', color: '#fff' }}
					icon={<EuroIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						Moved To Amsterdam
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Amsterdam, Netherlands
					</h4>
					<p>
						After struggling financially in Arnhem, Netherlands not being able
						to find jobs as a english speaker, I just had to move Amsterdam to
						support myself. Worked in Wagamama as a teamleader for a while.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="August 2013"
					iconStyle={{ background: 'green', color: '#fff' }}
					icon={<FlightTakeoffIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						Welcome Myself in Netherlands
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Arnhem, Netherlands
					</h4>
					<p>
						Came to Netherlands for my Automotive Engineering Bachelors.
						Completed 1 year of school successfully.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2010 - 2013"
					iconStyle={{ background: 'green', color: '#fff' }}
					icon={<LaptopMacIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						Technical Officer(SSN)
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Kathmandu, Nepal
					</h4>
					<p>
						With my passion for computers and the internet soon after my
						college, I joined Software Systems Nepal, an Accounting software
						company where I supported end-users problems regarding software bugs
						using SQL queries and build customer retention rates with the best
						services. Helped the company to grow it's revenue almost 2 times
						more within a year.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement iconStyle={{ background: 'red' }} />
			</VerticalTimeline>
		</div>
	);
}
