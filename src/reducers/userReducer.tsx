import { ReducerActionType } from "../types/reducerActionType";

export type UserType = {
  nome: string;
  idade: number;
};

export const userInitialState: UserType = {
  nome: "",
  idade: 0,
};

export const userReducer = (state: UserType, action: ReducerActionType) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, nome: action.payload.nome };
      break;

    case "CHANGE_AGE":
      return { ...state, idade: action.payload.idade };
      break;
  }

  return state;
};
