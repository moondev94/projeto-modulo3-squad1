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
      <h1 > <span>Sobre</span> o Site</h1>
      
        
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
         
         <h1 >Nossa <span>Equipe</span></h1>
         <Col className="grupo">
           <Card className="cd">
           
           <img className="img" src="https://avatars.githubusercontent.com/u/85020469?v=4" alt=""/>
            <h5 >JUAN SALES</h5>
             
               <p >Gestor de Conhecimento</p>

               <div className="social">
                <a href="https://github.com/Juangsales"><img src="https://raw.githubusercontent.com/caaiopereira/project-front-enders/main/img/git.png" alt=""/></a>
                <a href=""><img src="https://project-front-enders.vercel.app/img/inst.png" alt=""/></a>
                <a href="https://www.linkedin.com/in/juan-sales-723524158/"><img src="https://project-front-enders.vercel.app/img/linkedin.png" alt=""/></a>
               </div>
           
           </Card>

        
           <Card className="cd">
           
           <img className="img" src="https://media-exp1.licdn.com/dms/image/C4E03AQH4_PQQ_J7lXA/profile-displayphoto-shrink_800_800/0/1625260631370?e=1675900800&v=beta&t=l8zBK_oePLFsTcfyvZn_GxG5HOQCKoZfBoiw8Ln_OX4" alt=""/>
            <h5 >LUAN ALVES</h5>
              
              <p >Co-Facilitador</p>
              <div className="social">
                <a href="https://github.com/luanmartins8"><img src="https://raw.githubusercontent.com/caaiopereira/project-front-enders/main/img/git.png" alt=""/></a>
                <a href=""><img src="https://project-front-enders.vercel.app/img/inst.png" alt=""/></a>
                <a href="https://www.linkedin.com/in/luan-martins-55b33916b/"><img src="https://project-front-enders.vercel.app/img/linkedin.png" alt=""/></a>
               </div>
           
           </Card>
          

          
           <Card className="cd">
           
           <img className="img" src="https://media-exp1.licdn.com/dms/image/D4D03AQE0mSVnQz6Beg/profile-displayphoto-shrink_800_800/0/1665256052199?e=1675900800&v=beta&t=n1Kc7fCblYTnDNzKqI8DKmCIQ88_iIxgGrozmpTaEkk" alt=""/>
            <h5 >LUÍS HENRIQUE</h5>
             
              <p >Colaborador</p>
              <div className="social">
                <a href="https://github.com/Luis-Henrique-Lima"><img src="https://raw.githubusercontent.com/caaiopereira/project-front-enders/main/img/git.png" alt=""/></a>
                <a href=""><img src="https://project-front-enders.vercel.app/img/inst.png" alt=""/></a>
                <a href="https://www.linkedin.com/in/lu%C3%ADs-henrique-santos/"><img src="https://project-front-enders.vercel.app/img/linkedin.png" alt=""/></a>
               </div>
           
           </Card>
          

     
           <Card className="cd">
           
           <img className="img" src="https://project-front-enders.vercel.app/img/pedro.jpg" alt=""/>
            <h5 >PEDRO SOUZA</h5>
              
                <p >Colaborador</p>
                <div className="social">
                <a href="https://github.com/themonsteer"><img src="https://raw.githubusercontent.com/caaiopereira/project-front-enders/main/img/git.png" alt=""/></a>
                <a href=""><img src="https://project-front-enders.vercel.app/img/inst.png" alt=""/></a>
                <a href="https://www.linkedin.com/in/pedro-souza-a382b3182/"><img src="https://project-front-enders.vercel.app/img/linkedin.png" alt=""/></a>
               </div>
           
           </Card>  
           <Card className="cd">
          
           <img className="img" src="https://nossosquad.vercel.app/img/patrick.jpg" alt=""/>
            <h5>PATRICK COSTA</h5>
            
              <p>Gestor de engajamento</p>
              <div className="social">
                <a href="https://github.com/pkdev95"><img src="https://raw.githubusercontent.com/caaiopereira/project-front-enders/main/img/git.png" alt=""/></a>
                <a href=""><img src="https://project-front-enders.vercel.app/img/inst.png" alt=""/></a>
                <a href=""><img src="https://project-front-enders.vercel.app/img/linkedin.png" alt=""/></a>
               </div>
           
           </Card>
           
         </Col>
      </Container>
    </div>
    
  )
};

export default Sobre;
