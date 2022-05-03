import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    < div className='container'>
      <div className='imgagen'>
        <img id='logoHenry' src={Logo} alt="img not found" />
        <h1 class="navbar-brand">Henry - Weather App</h1>
      </div>
      <div>
        <SearchBar onSearch = {onSearch}/>
      </div>
    </div>
  );
};

export default Nav;
