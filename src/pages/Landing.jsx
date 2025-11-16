import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <section className="landing">
      <div className="landing-overlay">
        <h1>GreenThumbs</h1>
        <p className="tagline">Beautiful houseplants, delivered with care.</p>
        <p className="about">At GreenThumbs we curate healthy, easy-care plants for every home. Explore our selection and bring life into your space.</p>
        <Link to="/products" className="get-started">Get Started</Link>
      </div>
    </section>
  )
}
