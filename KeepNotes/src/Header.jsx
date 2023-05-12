import React from 'react';
import './index.css';
import logo from './images/logo.jpg'
const Header=()=>{
    return (
        <>
          <div className='header'>
          <img src={logo} alt='logo' width='70' height='50'></img>
          <h1>Salman Khan</h1>
          </div>  
        </>

    );
}
export default Header;