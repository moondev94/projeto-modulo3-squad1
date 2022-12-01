import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FormGroup, Label, Input, Form } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/Contato.css"

const Contato = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <body>
      <div id="formulario">
    <Form name="meu_form">
    
      <h1>Entre em contato</h1>
      
      
      <FormGroup>
      <Label for="name">
      Nome
    </Label>
  <Input
  type="text" 
  id="name" 
  placeholder="Nome e Sobrenome"
  onChange={(e) => setName(e.target.value)}
  />
</FormGroup>
      <FormGroup>
    <Label for="exampleNumber">
      Número
    </Label>
    <Input
      id="exampleNumber"
      name="number"
      placeholder="(xx) x xxxx-xxxx"
      type="number"
      
    />
</FormGroup>
<FormGroup>
    <Label for="exampleEmail">
      E-mail
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="nome@email.com.br"
      type="email"
      onChange={(e) => setEmail(e.target.value)}
    />
</FormGroup> 
<FormGroup>
    <Label for="exampleText">
      Mensagem
    </Label>
    <Input
      id="exampleText"
      name="text"
      type="textarea"
    />

</FormGroup>

<div>
      <Button color="danger" onClick={toggle}>
       Enviar
      </Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Mensagem enviada!</ModalHeader>
        <ModalBody>
          Olá {name}, em breve retornaremos sua mensagem para seu e-mail {email}, aguarde em até 24 horas.
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Ok
          </Button>{' '}
          
        </ModalFooter>
      </Modal>
</div>
  </Form>
  </div> 
  </body>
  
)}
export default Contato;
