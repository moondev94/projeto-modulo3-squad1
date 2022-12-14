
import React, { useState } from 'react';
import { Form, Button,Table } from 'semantic-ui-react';
import axios from 'axios';
import Update from './Update';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Read from './Read';
import Delete from './Delete';
import './css/AdmPage.css';


const AdmPage = () => {

    const [imagem , setImagem] = useState('');
    const [nome, setFilme] = useState('');
    const [diretor, setDiretor] = useState('');
    const [duracao, setDuracao] = useState('');
    const[lancamento, setLancamento] = useState('');

    

    const sendDataToAPI = () => {
        axios.post('https://trabalhoindividualjs.vercel.app/acao/', {
            imagem,
            nome,
            diretor,
            duracao,
            lancamento

    })
    }
 return(
    <div className='mt-20' >
    <Form>
        <Form.Field>
            <label>Filme</label>
            <input name='filme'  placeholder='Filme' onChange={(e) => setFilme(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Diretor</label>
            <input name='diretor'  placeholder='diretor' onChange={(e) => setDiretor(e.target.value)}  />
        </Form.Field>
        <Form.Field>
            <label>Duração</label>
            <input name='duracao'  placeholder='duração' onChange={(e) => setDuracao(e.target.value)}  />
        </Form.Field>
        <Form.Field>
            <label>Lançamento</label>
          <input name='Lançamento'  placeholder='lançamento' onChange={(e) => setLancamento(e.target.value)}  />
        </Form.Field>
        <Form.Field>
            <label>Imagem</label>
            <input name='Imagem'  placeholder='Imagem' onChange={(e) => setImagem(e.target.value)} />
        </Form.Field>
        <Button type='submit' onClick={sendDataToAPI}>Enviar</Button>
    </Form>



   <div className='zzz'>
 <div>   
  <Read/>
  </div>

  <div>
    <Update/>
  </div>

  <div>
    <Delete/>
  </div>

  </div>






</div>





 )

}

export default AdmPage;