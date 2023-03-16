import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextReducer } from "../../context/ContextReducers";

const MostrarDados = () => {
  const { dispatch, state } = useContext(ContextReducer);

  const handleChangeName = () => {
    console.log(state.user.nome);
    dispatch({
      type: "CHANGE_NAME",
      payload: {
        nome: "pedro",
      },
    });
  };

  return (
    <div>
      meu nome é {state.user.nome}
      <br />
      <button onClick={handleChangeName}>Trocar nome para Pedro</button>
      <button>
        <Link to={"/"}>Voltar para cadastro</Link>
      </button>
    </div>
  );
};

export default MostrarDados;
