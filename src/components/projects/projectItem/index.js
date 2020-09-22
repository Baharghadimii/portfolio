import React, { useRef, useEffect } from 'react'
import './index.sass'
import { Waypoint } from 'react-waypoint'
import { motion } from 'framer-motion';
import ProgressiveImage from 'react-progressive-image'

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
export default function ProjectItem(props) {

  const container = useRef()
  const img = useRef()
  const number = useRef()
  const title = useRef()
  const desc1 = useRef()
  const desc2 = useRef()
  const desc3 = useRef()
  const txts = useRef()
  const link = useRef()
  const linkA = useRef()
  useEffect(() => {
    document.getElementById('App').style.backgroundColor = 'transparent'
    if (props.index % 2 !== 0) {
      container.current.style = 'background-color: #DFF3FC; flex-direction: row-reverse'
      number.current.style.color = 'white'
      linkA.current.style.backgroundColor = 'white'
    }
    setTimeout(() => {
      if (img.current) {
        img.current.style = 'display: block'
      }
    }, 1000)
  }, [props.index])

  const handleRcOpen = () => {
    window.open(props.link);
  }
  const handleEnter = () => {
    if (window.innerWidth > 1000) {
      title.current.classList.add('text-animation')
      desc1.current.classList.add('text-animation')
      desc1.current.style.animationDelay = '0.1s'
      desc2.current.classList.add('text-animation')
      desc2.current.style.animationDelay = '0.2s'
      desc3.current.classList.add('text-animation')
      desc3.current.style.animationDelay = '0.3s'
    } else {
      txts.current.style.animation = 'opacity 2s forwards'
    }
    img.current.classList.add('opacity-animation')
    link.current.classList.add('opacity-animation')
    number.current.classList.add('opacity-animation')
  }

  return (
    <Waypoint onEnter={handleEnter} bottomOffset={'50%'}>
      <div ref={container} className="project-container">
        <div className="proj-wrper">
          <div className="text-container">
            <div className="txt-wrper">
              <div className="title-container">
                <div className="num">
                  <span ref={number}>{props.number}</span>
                </div>
                <div className="title">
                  <span ref={title}>{props.name}</span>
                </div>
              </div>
              <div className="desc-container">
                <div ref={txts} className="desc-wrper">
                  <div className="txt">
                    <span ref={desc1}>{props.description[0]}</span>
                  </div>
                  <div className="txt">
                    <span ref={desc2}>{props.description[1]}</span>
                  </div>
                  <div className="txt">
                    <span ref={desc3}>{props.description[2]}</span>
                  </div>

                </div>
              </div>
              <div ref={link} className="link-container" onClick={handleRcOpen}>
                <div className="link-wrapper">
                  <a ref={linkA}>
                    Click to visit the website
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="image-wrapper">
            <ProgressiveImage src={props.img} placeholder={props.cmpImg}>
              {src => <motion.img
                whileHover={{ scale: 1.05 }}
                transition={transition}
                ref={img} src={src}
                alt="mac-screen" />}
            </ProgressiveImage>
          </div>
        </div>
      </div>
    </Waypoint>
  )
}
