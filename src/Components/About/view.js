import React from 'react'
import Tada from 'react-reveal/Tada';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import WorkIcon from '@material-ui/icons/Work';
import HotelIcon from '@material-ui/icons/Hotel';
import EuroIcon from '@material-ui/icons/Euro';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';

export default function View() {
  return <div className='about-me-container'>
    <Tada>
      <h1>About me</h1>
    </Tada>

    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2018 - present"
        iconStyle={{ background: '#cf993c', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Social Media Evaluator(APPEN)</h3>
        <h4 className="vertical-timeline-element-subtitle">Remote(part-time)</h4>
        <p>
          Giving feedbacks on Social Media Feeds to make internet a safe place.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019 - 2019"
        iconStyle={{ background: 'green', color: '#fff' }}
        icon={<CastForEducationIcon />}
      >
        <h3 className="vertical-timeline-element-title">Codaisseur</h3>
        <h4 className="vertical-timeline-element-subtitle">Amsterdam, Netherlands</h4>
        <p>
          11 weeks of intense bootcamp to gain Full Stack Development Skills.
    </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017 - 2018"
        iconStyle={{ background: 'green', color: '#fff' }}
        icon={<HotelIcon />}
      >
        <h3 className="vertical-timeline-element-title">Diagnosed with Tuberculosis / Moved To Haarlem, Netherlands</h3>
        <h4 className="vertical-timeline-element-subtitle">Amsterdam, Netherlands</h4>
        <p>
          Sadly, got Diagnosed with Tuberculosis
          lead me to rest home for almost 5 months
          and Isolated, which was a major setback
          for my professional and personal Career.
          Also Moved to Haarlem for better Housing.
    </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2016 - 2017"
        iconStyle={{ background: 'green', color: '#fff' }}
        icon={<CastForEducationIcon />}
      >
        <h3 className="vertical-timeline-element-title">NYCDA(New York Code & Design Academy)</h3>
        <h4 className="vertical-timeline-element-subtitle">Amsterdam, Netherlands</h4>
        <p>
          Being intrested in Web Development as I was Setting up myself in Amsterdam
          joined NYCDA part-time(i.e 10 hrs/ week) course to gain basic knowledge of
          Web Development.
    </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2015 - 2016"
        iconStyle={{ background: 'green', color: '#fff' }}
        icon={<EuroIcon />}
      >
        <h3 className="vertical-timeline-element-title">Moved To Amsterdam</h3>
        <h4 className="vertical-timeline-element-subtitle">Amsterdam, Netherlands</h4>
        <p>
          After struggling financially in Arnhem, Netherlands not
          being able to find jobs as a english speaker, I just had to move
          Amsterdam to support myself. Worked in Wagamama as a teamleader for a while.
    </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="August 2013"
        iconStyle={{ background: 'green', color: '#fff' }}
        icon={<FlightTakeoffIcon />}
      >
        <h3 className="vertical-timeline-element-title">Welcome Myself in Netherlands</h3>
        <h4 className="vertical-timeline-element-subtitle">Arnhem, Netherlands</h4>
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
        <h3 className="vertical-timeline-element-title">Technical Officer(SSN)</h3>
        <h4 className="vertical-timeline-element-subtitle">Kathmandu, Nepal</h4>
        <p>
          Worked for Software Sytems Nepal as Technical Officer for POS(Point Of Sales) system.
          As Internet was not entirely fast that time had to reach clients personally
          to fix the bugs and error on Software on the spot. Helped the company to grow
          it's revenue almost 2 times more within a year.
    </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: 'red' }}
      />
    </VerticalTimeline>
  </div>
}