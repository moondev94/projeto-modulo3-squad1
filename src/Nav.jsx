
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

  <section className="banner">
    <h2>exemplo</h2>
  </section>

  <section className="diferenciais">
    <div class="w33">
      <h2>Texto de exemplo</h2>
      <p>Conteúdo de exemplo</p>
    </div>
    <div className="w33">
      <h2>Texto de exemplo</h2>
      <p>Conteúdo de exemplo</p>
    </div>
    <div className="w33">
      <h2>Texto de exemplo</h2>
      <p>Conteúdo de exemplo</p>
    </div>
  </section>

  <footer>
    <p>Todos os direitos reservados</p>
  </footer>

</div>



)
}


export default NavMenu;
