import React from 'react'
import { Link } from 'react-router-dom'
import './index.sass'

export default function Button() {
  return (
    <div className="btn-home-wrapper">
      <Link to="/projects" style={{ textDecoration: 'none' }}>
        <button className="btn">See My Projects!</button>
      </Link>
    </div>
  )
}
