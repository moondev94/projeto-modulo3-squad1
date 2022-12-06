import React from 'react';

import { Container, Row, Col, Toast, ToastHeader, ToastBody } from 'reactstrap';

const Sobre = () => {

return (

<div>
<div style={{ color: 'white'}}>
<h1>Quem Somos</h1>
</div>
<div className="p-3 my-2 rounded">

<Toast>

<ToastBody>

Nosso site de filmes foi criado para pessoas viciadas e apaixonadas por filmes. No nosso site você fica sabendo quais filmes são lançados, os que estão no cinema e aqueles que já estão em DVD, para você assistir em casa.

</ToastBody>

</Toast>

</div>

<Container>

<Row>

<Col className="">

<div className="p-3 my-2 rounded">

<Toast>

<ToastBody>

Nosso site de filmes foi criado para pessoas viciadas e apaixonadas por filmes. No nosso site você fica sabendo quais filmes são lançados, os que estão no cinema e aqueles que já estão em DVD, para você assistir em casa.

</ToastBody>

</Toast>

</div>

</Col>

</Row>

<Row>

<Col>

<div className="p-3 my-2 rounded bg-docs-transparent-grid">

<Toast>

<ToastBody>

No nosso site é entreter o mundo, e é por isso que levamos até você os melhores filmes para computadores, notebooks, celulares, tablets ou outros dispositivos. Nossos clientes controlam o que querem ver e quando, sem anúncios, com uma única assinatura.

</ToastBody>

</Toast>

</div>

</Col>

<Col>

<div className="p-3 my-2 rounded bg-docs-transparent-grid">

<Toast>

<ToastBody>

No nosso site é entreter o mundo, e é por isso que levamos até você os melhores filmes para computadores, notebooks, celulares, tablets ou outros dispositivos. Nossos clientes controlam o que querem ver e quando, sem anúncios, com uma única assinatura.

</ToastBody>

</Toast>

</div>

</Col>

</Row>

</Container>

</div>

)

};

export default Sobre;
