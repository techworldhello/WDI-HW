import React from 'react';
import './Tile.css';

export default function Tile({ name, selected, year }){
  const active =  selected ? "active" : "";
  return (
    <div className={active} className="grid">
      <h2>{name}</h2>
      <p>{year}</p>
    </div>
  )
}
