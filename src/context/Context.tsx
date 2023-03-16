import React, { createContext } from "react";

type ContextType = {
  nome: string;
  idade: number;
};

const dadosIniciais = {
  nome: "Ramon",
  idade: 90,
};

export const Context = createContext<ContextType>(dadosIniciais);

interface Props {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<Props> = ({ children }) => {
  return <Context.Provider value={dadosIniciais}>{children}</Context.Provider>;
};
