import React from 'react'

export default function index(props) {
  return (
    <img src={props.src} className={props.classList} alt={props.alt}></img>
  )
}
