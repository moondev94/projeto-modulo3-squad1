import React, {useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default function Read(){
    const[apiData, setApiData] = useState([]);
    useEffect(() =>{
        axios.get('https://trabalhoindividualjs.vercel.app/acao')
        .then((getData) => {
            setApiData(getData.data);
        })
    })

    const setID = (id) => {
        console.log(id);
        localStorage.setItem('ID', id)
    }
     
    const setData = (id, filme, diretor, duracao, lancamento) => {
        localStorage.setItem('ID', id)
        localStorage.setItem('filme', filme)
        localStorage.setItem('diretor', diretor)
        localStorage.setItem('duracao', duracao)
        localStorage.setItem('lancamento', lancamento)
    }

  const getData = () => [
    axios.get('https://trabalhoindividualjs.vercel.app/acao')
    .then((getData) => {
        setApiData(getData.data);
    })

  ]


  const onDelete = (id) =>{
  axios.delete(`https://trabalhoindividualjs.vercel.app/acao/${id}`)
  .then(() =>{
    getData();
  })



  }




  return(
    <div>
           <div>
            <Table singleLine>
               
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Título</Table.HeaderCell>
                        <Table.HeaderCell>Diretor</Table.HeaderCell>
                        <Table.HeaderCell>Duração</Table.HeaderCell>
                        <Table.HeaderCell>Lançamento</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {apiData.map((data) => {
                    return(
                        <Table.Row>
                        <Table.Cell>{data.nome}</Table.Cell>
                        <Table.Cell>{data.diretor}</Table.Cell>
                        <Table.Cell>{data.duracao}</Table.Cell>
                        <Table.Cell>{data.lancamento}</Table.Cell>
                        <Table.Cell><Button color="red" onClick={() => onDelete(data.id)} >Delete</Button></Table.Cell>
                       </Table.Row>
                    )
                })}
                    
                    
                </Table.Body>
            </Table>
        </div>

  



    </div>
  )


}