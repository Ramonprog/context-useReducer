import { createContext, useReducer } from "react";
import {
  userInitialState,
  userReducer,
  UserType,
} from "../reducers/userReducer";
import { ReducerActionType } from "../types/reducerActionType";
import {
  ThemeType,
  themeReducer,
  themeInitialState,
} from "../reducers/themeReducer";

type InitialStateType = {
  user: UserType;
  theme: ThemeType;
};

type ContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
};

const initialState = {
  user: userInitialState,
  theme: themeInitialState,
};

export const ContextReducer = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (state: InitialStateType, action: ReducerActionType) => ({
  user: userReducer(state.user, action),
  theme: themeReducer(state.theme, action),
});

interface Props {
  children: React.ReactNode;
}

export const ContextReducerProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <ContextReducer.Provider value={{ state, dispatch }}>
      {children}
    </ContextReducer.Provider>
  );
};
