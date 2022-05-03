import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({onSearch}) {

  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setCity(e.target.value)
  }

  return (
    <form className="container" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
      className="form-control"
        type="text"
        placeholder="Ciudad..."
        onChange={(e)=>handleInputChange(e)}
      />
      <input className='btn' type="submit" value="Agregar" />
    </form>
  );
}
