import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (<div>
    <button onClick = {props.onClose}>X</button>
    <h3>{props.name}</h3>
    <div>
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