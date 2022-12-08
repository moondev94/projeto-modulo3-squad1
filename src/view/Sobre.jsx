import React from 'react';
import { Container, Row, Col, Toast, ToastBody, Card, setEmail} from 'reactstrap';
import "./css/Sobre.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/Contato.css"

const Sobre = () => {
  document.title = "Sobre"
  return (
    <div>
      <h1 className="p-3"> <span>Sobre</span> o Site</h1>
      <Container>
        <Row>
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
         <h1 className="p-3">Nossa <span>Equipe</span></h1>
         <div className="p-3 my-2 rounded">
           <div>  
           <Card className="cd" >
           <ToastBody>
           <img className="img" src="https://avatars.githubusercontent.com/u/85020469?v=4" alt=""/>
            <p className="p-3 my-2">JUAN SALES</p>
           </ToastBody>
           </Card>
           </div>
         </div>

         <div className="p-3 my-2 rounded">
           <div>  
           <Card className="cd" >
           <ToastBody>
           <img className="img" src="https://media-exp1.licdn.com/dms/image/C4E03AQH4_PQQ_J7lXA/profile-displayphoto-shrink_800_800/0/1625260631370?e=1675900800&v=beta&t=l8zBK_oePLFsTcfyvZn_GxG5HOQCKoZfBoiw8Ln_OX4" alt=""/>
            <p className="p-3 my-2">LUAN ALVES</p>
           </ToastBody>
           </Card>
           </div>
         </div>

         <div className="p-3 my-2 rounded">
           <div>  
           <Card className="cd" >
           <ToastBody>
           <img className="img" src="https://media-exp1.licdn.com/dms/image/D4D03AQE0mSVnQz6Beg/profile-displayphoto-shrink_800_800/0/1665256052199?e=1675900800&v=beta&t=n1Kc7fCblYTnDNzKqI8DKmCIQ88_iIxgGrozmpTaEkk" alt=""/>
            <p className="p-3 my-2">LUÍS HENRIQUE</p>
           </ToastBody>
           </Card>
           </div>
         </div>

         <div className="p-3 my-2 rounded">
           <div>  
           <Card className="cd" >
           <ToastBody>
           <img className="img" src="https://project-front-enders.vercel.app/img/pedro.jpg" alt=""/>
            <p className="p-3 my-2">Pedro Souza</p>
           </ToastBody>
           </Card>
           </div>
         </div>

         <div className="p-3 my-2 rounded">
           <div>  
           <Card className="cd">
           <ToastBody>
           <img className="img" src="https://nossosquad.vercel.app/img/patrick.jpg" alt=""/>
            <p className="p-3 my-2">PATRICK COSTA</p>
           </ToastBody>
           </Card>
           </div>
         </div>
         
      </Container>
    </div>
  )
};

export default Sobre;
