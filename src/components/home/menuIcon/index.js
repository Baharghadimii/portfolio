import React, { useEffect, useRef } from 'react'
import './index.scss'

const MenuIcon = (props) => {

  useEffect(() => {
    if (props.changeIcon) {
      toggleClass()
    }
  }, [props.changeIcon])
  const nav = useRef()
  const handleClick = () => {
    toggleClass()
    props.openMenu();
  }
  const toggleClass = () => {
    nav.current.classList.toggle('active');
  }
  return (
    <div className="menu-container _po-absolute">
      <div ref={nav} onClick={handleClick} className='nav-trigger'>
        <i id="first-line"></i>
        <i id="second-line" className='second-line'></i>
        <i id="third-line"></i>
      </div>
    </div>
  )
}
export default MenuIcon;