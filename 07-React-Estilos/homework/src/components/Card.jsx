import React from 'react';
import style from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return (<div className={style.container}>
    <button onClick = {props.onClose} className={style.botonEliminar}>X</button>
    <h3>{props.name}</h3>
    <div className={style.infoClima}>
      <h5>Min</h5>
      <p>{props.min}</p>
    </div>
    <div>
      <h5>Max</h5>
      <p>{props.max}</p>
    </div>
    <img src={ `http://openweathermap.org/img/wn/${props.img}@2x.png`} alt = "Imagen"/>
  </div>)
};