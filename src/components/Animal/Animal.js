import React from 'react'
import './Animal.css'

export default function Animal({ name, type, says, top, left }) {
  return (
    <div className="animal" style={{ top: top, left: left }}>
      <img alt={name} src={`${process.env.PUBLIC_URL}/animals/${type}.svg`}></img>
      <span className="name">{name}</span>
      <span>{type}</span>
      <span>{says}</span>
    </div>
  )
}
