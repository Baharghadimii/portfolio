import React, { useState, useRef } from 'react'
import './index.sass'
import ProjectItem from './projectItem'
import data from '../../data/projectsData'
import MenuIcon from '../home/menuIcon'
import Menu from '../menu'
import { motion } from 'framer-motion'

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

export default function Projects() {
  const [menu, setMenu] = useState(false);
  const [status, setStatus] = useState('')
  const [changeIcon, setChangeIcon] = useState(false)
  const [menuIcon, setMenuIcon] = useState(true)
  const wrapper = useRef();
  const container = useRef();
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
    if (window.innerWidth > 1000) {
      wrapper.current.style = 'opacity: 0.2'
    } else {
      container.current.style = 'overflow-y: hidden'
    }
    elemenIds.forEach(element => {
      if (document.getElementById(element)) {
        document.getElementById(element).style.backgroundColor = 'white';
      }
    })
    setMenu(true)
  }
  const closeMenu = () => {
    setStatus('slide-out')
    if (window.innerWidth > 1000) {
      wrapper.current.style = 'opacity: 1'
    } else {
      container.current.style = 'overflow-y: visible'
    }
    elemenIds.forEach(element => {
      if (document.getElementById(element)) {
        document.getElementById(element).style.backgroundColor = '#83cff8';
      }
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
    <motion.div
      ref={container}
      exit={{ opacity: 0 }}
      transition={transition}
      className="projects-container">
      <div className="menu-wrap">
        {menuIcon && <MenuIcon openMenu={handleMenu} changeIcon={changeIcon} />}
      </div>
      <div className="projs-wrapper"
        ref={wrapper}>
        {data.map((item, index) => {
          return <ProjectItem
            key={index}
            number={item.number}
            name={item.name}
            description={item.description}
            img={item.picSrc}
            link={item.link}
            cmpImg={item.compressedImg}
            index={index} />
        })}

      </div>
      {menu && <Menu
        status={status}
        closeMenu={closeMenu}
        changeIcon={handleIconOnClose}
        removeIcon={openProjects} />}
    </motion.div>
  )
}
