import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './index.sass'

const EMAIL = 'bahar@baharghadimi.com'
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent('My store sync')}`

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
}

const symptoms = [
  'You sold something you didn’t have, because stock didn’t update in time.',
  'The app created duplicate listings, sometimes hundreds or thousands of them.',
  'Stock numbers keep changing back after you fix them.',
  'Etsy or eBay orders don’t reach Shopify, or arrive with errors.',
  'Variants, photos or prices came across wrong.',
  'The sync app’s support stopped answering.',
]

const steps = [
  {
    title: 'Tell me what’s wrong',
    text: 'Email me where you sell, roughly how many products you have, and which sync app you use. Screenshots help.',
  },
  {
    title: 'Get a plan and a fixed price',
    text: 'I reply with what I think went wrong, what I’d do about it, and what it costs. Nothing starts until you say yes.',
  },
  {
    title: 'Give access the safe way',
    text: 'You approve a Shopify collaborator request in your own admin. You never share a password, and you can remove access at any time.',
  },
  {
    title: 'I back up, fix and test',
    text: 'I export your products and stock first, test the fix on a few products, then do the rest. You get a written summary of everything that changed.',
  },
]

export default function Work() {
  useEffect(() => {
    document.title = 'Fix your Shopify sync | Bahareh Ghadimi'
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
      className="wk-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <nav className="wk-nav" aria-label="Site">
        <Link to="/" className="wk-home">Bahareh Ghadimi</Link>
        <Link to="/projects" className="wk-navlink">Projects</Link>
      </nav>

      <header className="wk-hero">
        <p className="wk-eyebrow">Work with me</p>
        <h1 className="wk-title">
          Shopify out of sync with Etsy, eBay or Amazon? I’ll fix it.
        </h1>
        <p className="wk-lead">
          When a sync app breaks, you end up overselling, deleting duplicate
          listings and checking stock by hand. I get your channels matching
          again and clean up what the broken sync left behind.
        </p>
        <a className="wk-cta" href={MAILTO}>Email me about your store</a>
        <p className="wk-note">By email from start to finish. No calls, no passwords.</p>
      </header>

      <section className="wk-section" aria-labelledby="wk-symptoms">
        <h2 id="wk-symptoms" className="wk-heading">Sound familiar?</h2>
        <ul className="wk-list">
          {symptoms.map(item => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="wk-section" aria-labelledby="wk-how">
        <h2 id="wk-how" className="wk-heading">How it works</h2>
        <p className="wk-text">I work with shops anywhere, all by email.</p>
        <ol className="wk-steps">
          {steps.map((step, i) => (
            <li key={step.title}>
              <span className="wk-num" aria-hidden="true">{i + 1}</span>
              <div>
                <h3 className="wk-subheading">{step.title}</h3>
                <p className="wk-text">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="wk-section wk-two" aria-label="Details">
        <div>
          <h2 className="wk-heading">What I work with</h2>
          <p className="wk-text">
            Shopify with Etsy, eBay, Amazon and Walmart, and the common sync
            apps, including Marketplace Connect, CedCommerce, DPL, QuickSync,
            LitCommerce and Trunk. If the app you have isn’t the right fit, I’ll
            tell you which one is and move you over without losing listings or
            reviews.
          </p>
        </div>
        <div>
          <h2 className="wk-heading">Price</h2>
          <p className="wk-text">
            A fixed price for each job, agreed in writing before I start. The
            first reply with a plan is free.
          </p>
        </div>
      </section>

      <section className="wk-section wk-about" aria-labelledby="wk-about">
        <h2 id="wk-about" className="wk-heading">About me</h2>
        <p className="wk-text">
          I’m Bahareh (Bahar), a software engineer in North Vancouver, Canada.
          I’ve worked as a front-end developer at Matter, an ecommerce funnel
          platform, where I worked on the Shopify and WooCommerce integrations
          that synced orders and products, and as a software engineer at Dapper
          Labs. My own Etsy shop runs on an
          automated setup I built, so I know how quickly a bad sync turns into
          a mess, and how to clean one up carefully.
        </p>
        <p className="wk-links">
          <a href="https://www.linkedin.com/in/bahareh-ghadimi/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Baharghadimii" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </section>

      <footer className="wk-final">
        <h2 className="wk-heading">Tell me what’s going on</h2>
        <p className="wk-text">I usually reply within one business day.</p>
        <a className="wk-cta" href={MAILTO}>Email me</a>
        <p className="wk-email">{EMAIL}</p>
      </footer>
    </motion.main>
  )
}
