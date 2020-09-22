import React, { useState, useRef, useEffect } from 'react'
import MenuIcon from './menuIcon'
import Menu from '../menu'
import Svg from '../svg'
import SvgComponents from '../../svgs';
import Intro from './intro'
import Button from './button'
import { motion } from 'framer-motion'
import './index.sass'

export default function Home(props) {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  }

  const [menu, setMenu] = useState(false);
  const [status, setStatus] = useState('')
  const [changeIcon, setChangeIcon] = useState(false)
  const [menuIcon, setMenuIcon] = useState(true)
  const container = useRef();
  const wrapper = useRef();
  const svgList = [
    { src: SvgComponents.cloudOne, classList: 'cloud-one _po-absolute', alt: 'Cloud' },
    { src: SvgComponents.cloudTwo, classList: 'cloud-two _po-absolute', alt: 'Cloud' },
    { src: SvgComponents.back, classList: 'back-svg', alt: 'City' },
    { src: SvgComponents.girl, classList: 'girl-svg _po-absolute', alt: 'Girl' },
    { src: SvgComponents.shadow, classList: 'shadow _po-absolute', alt: 'Shadow' },
  ]
  useEffect(() => {
    if (window.innerWidth < 1000) {
      document.getElementById('App').style.backgroundColor = '#DFF3FC';
    }
  }, [])
  const elemenIds = ['first-line', 'second-line', 'third-line']
  const handleMenu = () => {
    if (menu) {
      closeMenu()
    } else {
      openMenu()
    }
  }
  const openMenu = () => {
    setStatus('slide-in')
    setChangeIcon(false)
    wrapper.current.style = 'opacity: 0.2'
    elemenIds.forEach(element => {
      document.getElementById(element).style.backgroundColor = 'white';
    })
    setMenu(true)
  }
  const closeMenu = () => {
    setStatus('slide-out')
    wrapper.current.style = 'opacity: 1'
    elemenIds.forEach(element => {
      document.getElementById(element).style.backgroundColor = '#83cff8';
    })
    setTimeout(() => {
      setMenu(false)
    }, 1100)
  }
  const handleIconOnClose = () => {
    closeMenu();
    setChangeIcon(true)
  }
  const openProjects = () => {
    setMenuIcon(false)
    setTimeout(() => {
    }, 1100)
  }
  return (
    <motion.header
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      ref={container} className="header-container">
      <div className="menu-icon-wrapper">
        {menuIcon && <MenuIcon openMenu={handleMenu} changeIcon={changeIcon} />}
      </div>
      <div ref={wrapper} className="svgs-wrapper">
        {svgList.map((item, index) => {
          return <Svg src={item.src} classList={item.classList} alt={item.alt} key={index} />
        })}
        <div className="intro-btn-wrapper">
          <Intro className="intro-container" />
          <Button />
        </div>
      </div>
      {menu && <Menu
        status={status}
        closeMenu={closeMenu}
        changeIcon={handleIconOnClose}
        removeIcon={openProjects} />}
    </motion.header>
  )
}
