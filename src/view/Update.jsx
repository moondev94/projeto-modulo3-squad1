import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';



const Update = () => {
  
    const [nome, setFilme] = useState('');
    const [diretor, setDiretor] = useState('');
    const [duracao, setDuracao] = useState('');
    const[lancamento, setLancamento] = useState('');
    const[imagem, setImagem] = useState('');
    const[ID, setID ] = useState(null);
    

    const sendDataToAPI = () => {
        axios.put(`https://trabalhoindividualjs.vercel.app/terror/${ID}`, {
            nome,
            diretor,
            duracao,
            lancamento,
            imagem
    })     

    }   

    useEffect(() => {
        setFilme(localStorage.getItem('nome'));  
        setDiretor(localStorage.getItem('diretor')); 
        setDuracao(localStorage.getItem('duracao')); 
        setLancamento(localStorage.getItem('lancamento')); 
        setImagem(localStorage.getItem('imagem'));
        setID(localStorage.getItem('ID'))
    })



    return(

        <div>
            <Form>
                <Form.Field>
                    <label>Filme</label>
                    <input name='nome' value={nome} onChange={(e) => setFilme(e.target.value)} 
                    placeholder='Filme' />
                </Form.Field>
                <Form.Field>
                    <label>Diretor</label>
                    <input name='diretor' value={diretor}
                     placeholder='diretor'
                     onChange={(e) => setDiretor(e.target.value)}  />
                </Form.Field>
                <Form.Field>
                    <label>Duração</label>
                    <input name='duracao' value={duracao}
                     placeholder='duração'
                     onChange={(e) => setDuracao(e.target.value)}  />
                </Form.Field>
                <Form.Field>
                    <label>Lançamento</label>
                    <input name='Lançamento' value={lancamento}
                     placeholder='lançamento'
                     onChange={(e) => setLancamento(e.target.value)}  />
                </Form.Field>
                <Form.Field>
                    <label>Imagem</label>
                    <input name='Imagem' value={lancamento}
                     placeholder='imagem'
                     onChange={(e) => setLancamento(e.target.value)}  />
                </Form.Field>
                <Button type='submit' onClick={sendDataToAPI}>atualizar</Button>
            </Form>
        </div>
        



    )
}

export default Update;