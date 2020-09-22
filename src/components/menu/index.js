import React, { useEffect, useRef } from 'react'
import './index.sass'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
export default function Menu(props) {

  const nav = useRef()
  useEffect(() => {
    if (props.status === 'slide-in') {
      if (nav.current) {
        nav.current.classList.add('slide-in')
      }
      document.querySelectorAll('li').forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('slide-down')
        }, 200 * index)
      });
    }
    if (props.status === 'slide-out') {
      setTimeout(() => {
        if (nav.current) {
          nav.current.classList.add('slide-out')
          nav.current.classList.remove('slide-in')
        }
      }, 200)
      document.querySelectorAll('li').forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('slide-up')
        }, 100 * index)
      });
    }
  })
  const closeMenuDiv = () => {
    props.changeIcon()
  }
  const openEmail = () => {
    window.open('mailto:bahareh.ghad@gmail.com');
  }
  const openResume = () => {
    window.open('https://resume.creddle.io/resume/ag40z7jjh9c');
  }
  return (
    <div ref={nav} id='nav' className='menu-wrapper' >
      <div className='menu-list'>
        <ul className='ul-list'>
          <li onClick={closeMenuDiv}>
            <Link style={{ textDecoration: 'none', color: 'white', cursor: 'none' }} to='/'>Home</Link>
          </li>
          <li onClick={closeMenuDiv}>
            <Link style={{ textDecoration: 'none', color: 'white', cursor: 'none' }} to="/projects">Projects</Link>
          </li>
          <li onClick={openEmail}>Contact</li>
          <li onClick={openResume}>Resume</li>
        </ul>
        <div className="icons-holder">
          <div className="icons-wrapper">
            <FaLinkedin size={'40'} color={'white'} onClick={() => window.open('https://www.linkedin.com/in/bahareh-ghadimi/')} />
            <FaGithub size={'40'} color={'white'} onClick={() => window.open('https://github.com/Baharghadimii')} />
            <FaEnvelope size={'40'} color={'white'} onClick={() => window.open('mailto:bahareh.ghad@gmail.com')} />
          </div>
        </div>
      </div>
    </div >
  )
}
