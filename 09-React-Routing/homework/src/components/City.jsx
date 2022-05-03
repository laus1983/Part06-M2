import React from "react";
export default function City({ city }) {
  return (
    <div>
      <h2>{city.name}</h2>
      <div>
        <div>Temperatura: {city.temp}</div>
        <div>Clima: {city.weather}</div>
        <div>Viento: {city.wind}</div>
        <div>Nubosidad: {city.clouds}</div>
      </div>
    </div>
  );
}
