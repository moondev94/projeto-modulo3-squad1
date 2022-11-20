
import {useState } from 'react';
import './Nav.css';
import React from 'react';
import logo from './imagens/logo.png';

 function NavMenu(){
return(
  <div className='header'>
  <header>
    <div className="w50">
    <a href=""><img src={logo}/></a> 
    </div>
    <div className="w50">
      <div class="menu">
        <a href="">Início</a>
        <a href="">Em cartaz</a>
        <a href="">top 10 filmes</a>
        <a href="">Lançamentos</a>
      </div>
    </div>
  </header>
</div>



)
}


export default NavMenu;
