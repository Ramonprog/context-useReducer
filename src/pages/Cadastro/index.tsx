import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { ContextReducer } from "../../context/ContextReducers";

const Cadastro = () => {
  const { state, dispatch } = useContext(ContextReducer);
  const [nameInput, setNameInput] = useState(state.user.nome);
  const [idadeInput, setIdadeInput] = useState<number>(state.user.idade);

  const handleSave = () => {
    dispatch({
      type: "CHANGE_NAME",
      payload: {
        nome: nameInput,
      },
    });

    dispatch({
      type: "CHANGE_AGE",
      payload: {
        idade: idadeInput,
      },
    });
  };

  return (
    <div>
      <h3>tela cadastro</h3>

      <input
        type="text"
        placeholder="Digite um nome"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />

      <input
        type="text"
        placeholder="Digite uma idade"
        value={idadeInput}
        onChange={(e) => setIdadeInput(parseInt(e.target.value))}
      />

      <button onClick={handleSave}>
        <Link to={"/exibir"}>Ir para Mostrar dados</Link>
      </button>
    </div>
  );
};

export default Cadastro;
