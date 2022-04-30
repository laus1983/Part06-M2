import React from 'react';
import cities from '../data';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      {cities.map(card => (<Card
        max={card.main.temp_max}
        min={card.main.temp_min}
        name={card.name}
        img={card.weather[0].icon}
        onClose={() => alert(card.name)}
      />))}
    </div>
  )
};