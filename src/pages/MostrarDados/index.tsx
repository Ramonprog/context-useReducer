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
      {state.user.nome && (
        <p>
          meu nome é {state.user.nome} e eu tenho {state.user.idade} anos
        </p>
      )}
      <button>
        <Link to={"/"}>Voltar para cadastro</Link>
      </button>
    </div>
  );
};

export default MostrarDados;
