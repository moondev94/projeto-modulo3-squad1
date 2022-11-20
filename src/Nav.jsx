
import {useState } from 'react';
import './Nav.css';
import React from 'react';
import logo from './imagens/logo.png';
import{Button} from 'reactstrap';

 function NavMenu(){
return(
  <div className='header'>
  <header>
    <div className="w50">
    <a href=""><img src={logo}/></a> 
    </div>
    <div className="w50">
      <div class="menu">
       <Button className="nm" color="primary" href="">Início</Button>
       <Button className="nm" color="primary" href="">Em Cartaz</Button>
       <Button className="nm" color="primary" href="">Top 10 filmes</Button>
       <Button color="primary" href="">Lançamentos</Button>
      </div>
    </div>
  </header>
</div>



)
}


export default NavMenu;
