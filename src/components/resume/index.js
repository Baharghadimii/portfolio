import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './index.sass'

const PDF = '/Bahareh-Ghadimi-Resume.pdf'

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
}

const jobs = [
  {
    company: 'Independent',
    role: 'Software Engineer, independent projects',
    dates: 'Apr 2026 – present',
    place: 'North Vancouver, BC',
    points: [
      <>Built <a href="https://northvanvotes.ca/">North Van Votes</a>, a nonpartisan guide to North Vancouver’s 2026 local election: all 59 candidates, every position quoted word for word with a link to the source, and the official results after the vote.</>,
      'Built an automated Etsy shop pipeline that researches niches, generates and checks designs, publishes listings and reviews sales every month, running on scheduled jobs on a VPS.',
      'Built a market research tool that sends teams of AI agents through app store, marketplace and forum reviews and returns sourced reports (Python, Flask).',
      <>Started a service that fixes broken Shopify syncs with Etsy, eBay and Amazon for small online stores (<Link to="/work">baharghadimi.com/work</Link>).</>,
      'Build with AI coding tools day to day, and review and test what they produce before it ships.',
    ],
  },
  {
    company: 'Dapper Labs',
    role: 'Software Engineer',
    dates: 'Jul 2023 – Mar 2026',
    place: 'Vancouver, BC',
    points: [
      'Built and maintained internal tools in Retool for the teams running Dapper’s consumer products.',
      'Delivered features and fixes for NBA Top Shot and Disney Pinnacle.',
    ],
  },
  {
    company: 'Matter Inc.',
    role: 'Front-end Developer',
    dates: 'Mar 2021 – Jun 2023',
    place: 'Vancouver, BC',
    about: 'A platform that builds and optimizes ecommerce sales funnels for online brands.',
    points: [
      'Built ecommerce funnel pages in Next.js and React from reusable components and templates.',
      'Built a funnel generator on a fork of Directus, the open-source headless CMS: marketers created the content, and GraphQL mapped it to our React components to produce funnel pages.',
      'Worked on the Shopify and WooCommerce integrations that synced orders and products between brands’ stores and the platform.',
      'Worked on admin screens and REST API endpoints, and wrote Jest tests.',
    ],
  },
  {
    company: 'Absolute Software',
    role: 'Web Developer',
    dates: 'Aug 2020 – Jan 2021',
    place: 'Vancouver, BC',
    points: [
      'Maintained and updated the company’s public website using its content management system.',
    ],
  },
  {
    company: 'RC North American Consultancy',
    role: 'Web Developer',
    dates: 'Apr 2020 – Sep 2020',
    place: 'Vancouver, BC',
    points: [
      'Built the company’s recruiting web application in React (ES6), hosted on AWS S3 and Amplify.',
      'Integrated third-party systems, including email marketing.',
    ],
  },
  {
    company: 'Azarm Language Center',
    role: 'English Instructor',
    dates: 'Jan 2013 – Jan 2015',
    place: 'Tehran, Iran',
    points: [],
  },
]

const skills = [
  ['Front end', 'JavaScript, React, Next.js, GraphQL, HTML, CSS and Sass, UI and UX design'],
  ['Tools', 'Shopify and WooCommerce integrations, REST APIs, Directus, Retool, Jest, Git, AWS (S3, Amplify), Python and Flask, AI coding tools'],
  ['Languages', 'English, Farsi (native)'],
]

const education = [
  ['Lighthouse Labs', 'Diploma, Full-Stack Web Development', '2020'],
  ['Islamic Azad University', 'Master’s degree, Teaching English as a Foreign Language', '2014'],
]

const certifications = [
  'SCJP Java Programming Essentials',
  'Visual Elements of User Interface Design',
  'The Complete App Design Course: UX, UI and Design Thinking',
]

export default function Resume() {
  useEffect(() => {
    document.title = 'Resume | Bahareh Ghadimi'
    const app = document.getElementById('App')
    const previous = app ? app.style.backgroundColor : ''
    if (app) app.style.backgroundColor = '#ffffff'
    return () => {
      document.title = 'Bahareh Ghadimi'
      if (app) app.style.backgroundColor = previous
    }
  }, [])

  return (
    <motion.main
      className="rs-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <nav className="rs-nav" aria-label="Site">
        <Link to="/" className="rs-home">Bahareh Ghadimi</Link>
        <a className="rs-download" href={PDF} download>Download PDF</a>
      </nav>

      <article className="rs-sheet">
        <header className="rs-header">
          <h1 className="rs-name">Bahareh Ghadimi</h1>
          <p className="rs-title">Software Engineer · Front end and internal tools</p>
          <p className="rs-contact">
            <span>North Vancouver, BC</span>
            <a href="mailto:bahar@baharghadimi.com">bahar@baharghadimi.com</a>
            <a href="https://baharghadimi.com">baharghadimi.com</a>
            <a href="https://www.linkedin.com/in/bahareh-ghadimi/">linkedin.com/in/bahareh-ghadimi</a>
            <a href="https://github.com/Baharghadimii">github.com/Baharghadimii</a>
          </p>
        </header>

        <section className="rs-section">
          <p className="rs-summary">
            Front-end software engineer with six years of experience, from
            ecommerce funnel pages and Shopify integrations at Matter to internal
            tools and consumer features at Dapper Labs.
            Since 2026 I have been building and running my own products with AI
            coding tools, and I like taking a messy problem all the way to a tool
            people actually use.
          </p>
        </section>

        <section className="rs-section">
          <h2 className="rs-heading">Experience</h2>
          {jobs.map(job => (
            <div className="rs-job" key={job.company}>
              <div className="rs-job-top">
                <h3 className="rs-company">{job.company}<span className="rs-role"> · {job.role}</span></h3>
                <p className="rs-dates">{job.dates}</p>
              </div>
              <p className="rs-place">{job.place}</p>
              {job.about && <p className="rs-about">{job.about}</p>}
              {job.points.length > 0 && (
                <ul className="rs-points">
                  {job.points.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              )}
            </div>
          ))}
        </section>

        <section className="rs-section">
          <h2 className="rs-heading">Skills</h2>
          <dl className="rs-skills">
            {skills.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="rs-section rs-two">
          <div>
            <h2 className="rs-heading">Education</h2>
            {education.map(([school, degree, year]) => (
              <p className="rs-edu" key={school}>
                <strong>{school}</strong>, {degree} ({year})
              </p>
            ))}
          </div>
          <div>
            <h2 className="rs-heading">Certifications</h2>
            <p className="rs-edu">{certifications.join(' · ')}</p>
          </div>
        </section>
      </article>
    </motion.main>
  )
}
