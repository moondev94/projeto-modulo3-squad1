import React from 'react';
import { Container, Row, Col, ToastBody, Card} from 'reactstrap';
import "./css/Sobre.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/Contato.css"

const Sobre = () => {
  document.title = "Sobre"
  return (
    <div>
      <Container>
      <Row>
      <h1 className="p-3"> <span>Sobre</span> o Site</h1>
      
        
          <Col>
            <div className="p-3 my-2 rounded">
              <Col>
                <ToastBody style={{color: 'white'}}>
                Nosso site de filmes foi criado para pessoas viciadas e apaixonadas por filmes. No nosso site você fica sabendo quais filmes são lançados, os que estão no cinema e aqueles que já estão em DVD, para você assistir em casa.  No nosso site é entreter o mundo, e é por isso que levamos até você os melhores filmes para computadores, notebooks, celulares, tablets ou outros dispositivos. Nossos clientes controlam o que querem ver e quando, sem anúncios, com uma única assinatura.  Os filmes podem nos ajudar a encontrar respostas, a compartilhar sentimentos e a aprender um pouco mais sobre nós mesmos e o mundo.
               </ToastBody>
              </Col>
            </div>
          </Col>
        </Row>
         <hr style={{color: 'rgb(233 30 99)', fontStyle: 'bold' }}></hr>
         <Row className="grupo">
         <h1 className="p-3">Nossa <span>Equipe</span></h1>
          
           <Card className="cd">
           <ToastBody>
           <img className="img" src="https://avatars.githubusercontent.com/u/85020469?v=4" alt=""/>
            <h5 className="p-3 my-2">JUAN SALES</h5>
             <h6>Função na Equipe</h6>
               <p className="p-3">Gestor de Conhecimento</p>
           </ToastBody>
           </Card>

        
           <Card className="cd">
           <ToastBody>
           <img className="img" src="https://media-exp1.licdn.com/dms/image/C4E03AQH4_PQQ_J7lXA/profile-displayphoto-shrink_800_800/0/1625260631370?e=1675900800&v=beta&t=l8zBK_oePLFsTcfyvZn_GxG5HOQCKoZfBoiw8Ln_OX4" alt=""/>
            <h5 className="p-3 my-2">LUAN ALVES</h5>
              <h6>Função na Equipe </h6>
              <p className="p-3">Co-Facilitador</p>
           </ToastBody>
           </Card>
          

          
           <Card className="cd">
           <ToastBody>
           <img className="img" src="https://media-exp1.licdn.com/dms/image/D4D03AQE0mSVnQz6Beg/profile-displayphoto-shrink_800_800/0/1665256052199?e=1675900800&v=beta&t=n1Kc7fCblYTnDNzKqI8DKmCIQ88_iIxgGrozmpTaEkk" alt=""/>
            <h5 className="p-3 my-2">LUÍS HENRIQUE</h5>
             <h6>Função na Equipe</h6>
              <p className="p-3">Colaborador</p>
           </ToastBody>
           </Card>
          

     
           <Card className="cd">
           <ToastBody>
           <img className="img" src="https://project-front-enders.vercel.app/img/pedro.jpg" alt=""/>
            <h5 className="p-3 my-2">PEDRO SOUZA</h5>
              <h6>Função na Equipe</h6>
                <p className="p-3">Colaborador</p>
           </ToastBody>
           </Card>  
           <Card className="cd">
           <ToastBody>
           <img className="img" src="https://nossosquad.vercel.app/img/patrick.jpg" alt=""/>
            <h5 className="p-3 my-2">PATRICK COSTA</h5>
             <h6>Função na Equipe</h6>
              <p className="p-3">Gestor de gente e engajamento</p>
           </ToastBody>
           </Card>
           
         </Row>
      </Container>
    </div>
    
  )
};

export default Sobre;
