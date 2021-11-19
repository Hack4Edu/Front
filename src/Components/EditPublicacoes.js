import React, { Fragment, useState } from "react";

const EditPublicacoes = ({publicacao}) => {
  //console.log(publicacao);
  const [descricao, setDescricao] = useState(publicacao.descricao)
  
  //updatePublicacao

  const updatePublicacao = async e => {
    e.preventDefault()
    try {
      const body = { descricao };
      const response = await fetch(`http://localhost:3300/publicacoes/${publicacao.publicacao_id}`,
      {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      window.location = "/Publicacoes"
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${publicacao.publicacao_id}`}
      >
        Editar
      </button>

      <div className="modal" id={`id${publicacao.publicacao_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar publicação</h4>
              <button type="button" className="btn-close" data-dismiss="modal" onClick={() => setDescricao(publicacao.descricao)}>
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input 
                type="text" 
                className="form-control" 
                value={descricao}
                onChange={e => setDescricao(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-warning" 
                data-dismiss="modal"
                onClick={e => updatePublicacao(e)}
                >
                Editar
              </button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditPublicacoes;
