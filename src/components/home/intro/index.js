import React from 'react'
import './index.scss'

export default function Intro() {
  return (
    <section className="container">
      <h1>
        <span>Hi there,</span>
        <span>I'm Bahareh</span>
      </h1>
      <div style={{ backgroundColor: 'red' }}>
        <h2 style={{ transform: 'translate(0,10%)' }}>
          <span>Web developer and designer</span>
          <span>based in Vancouver,</span>
          <span>with a flair</span>
          <span>for creating elegant solutions.</span>
        </h2>
      </div>

    </section>
  )
}
