import React from 'react';
import style from './SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return <div className={style.container}>
    <input type="text" placeholder="Ciudad..."/>
    <button onClick={() => props.onSearch("Searching...")} className = {style.botonAgregar}>Agregar</button>
  </div>
};