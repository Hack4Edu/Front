import React, { Fragment, useEffect, useState } from "react";
import EditPublicacoes from "./EditPublicacoes"; 

const ListPublicacoes = () => {
  const [publicacoes, setPublicacoes] = useState([]);

  //delete

  const deletePublicaco = async (id) => {
    try {
      const deletePublicaco = await fetch(
        `http://localhost:3300/publicacoes/${id}`,
        {
          method: "DELETE",
        }
      );

     setPublicacoes(publicacoes.filter(publicacao => publicacao.publicacao_id !== id))
    } catch (error) {
      console.error(error.message);
    }
  };

  const getPublicacoes = async () => {
    try {
      const response = await fetch("http://localhost:3300/publicacoes");
      const jsonData = await response.json();

      setPublicacoes(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getPublicacoes();
  }, []);

  //console.log(publicacoes)
  return (
    <>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Conteudo</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {publicacoes.map((publicacao) => (
            <tr key={publicacao.publicacao_id}>
              <td>{publicacao.descricao}</td>
              <td><EditPublicacoes publicacao = {publicacao}/></td>
              <td>
                <button
                  className="fixBtn btn btn-danger"
                  onClick={() => deletePublicaco(publicacao.publicacao_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListPublicacoes;
