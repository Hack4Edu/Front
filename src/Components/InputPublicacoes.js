import React, {Fragment, useState} from 'react';

const  InputPublicacoes  =  () => {

const [descricao, setDescricao] = useState("");

const onSubmitForm = async e => {
  e.preventDefault();
  console.log(e)
  console.log(descricao)
  try {
    const body = { descricao } 
    const response = await fetch("http://localhost:3300/publicacao",
    {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(body)      
    });
    
   console.log(response)
  } catch (error) {
    console.error(error.message)
  }

}

  return(
  <Fragment>
    <h1 className="text-center mt-5">Lista de Publicações</h1>
    <form className="d-flex" onSubmit={onSubmitForm}>
        <input 
          type="text" 
          className="form-control" 
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
          />
        <button className="btn btn-success">Adcionar</button>
      </form>
  </Fragment>
  ); 
}
export default InputPublicacoes;