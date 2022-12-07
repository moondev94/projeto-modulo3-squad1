import React from 'react';
import { Container, Row, Col, Toast, ToastHeader, ToastBody } from 'reactstrap';

const Sobre = () => {
  document.title = "Sobre";
  return (
    <div>
      <h1 className="p-3">Quem Somos</h1>

      <Container>
        <Row>
          <Col>
             <div className="p-3 my-2 rounded" >
              <Col>
                <ToastBody style={{color: 'white'}}>
                Nosso site de filmes foi criado para pessoas viciadas e apaixonadas por filmes. No nosso site você fica sabendo quais filmes são lançados, os que estão no cinema e aqueles que já estão em DVD, para você assistir em casa.  No nosso site é entreter o mundo, e é por isso que levamos até você os melhores filmes para computadores, notebooks, celulares, tablets ou outros dispositivos. Nossos clientes controlam o que querem ver e quando, sem anúncios, com uma única assinatura.  Os filmes podem nos ajudar a encontrar respostas, a compartilhar sentimentos e a aprender um pouco mais sobre nós mesmos e o mundo.
               </ToastBody>
              </Col>
            </div>
          </Col>
         
         
        </Row>
        <hr style={{color: 'rgb(233 30 99)'}}></hr>
        <div className="p-3 my-2 rounded">
           <div>
           <Toast>
           <ToastBody>
           This is a toast on a white background — check it out!
           </ToastBody>
           </Toast>
           </div>
     </div>
      </Container>

    </div>

  )

};

export default Sobre;
