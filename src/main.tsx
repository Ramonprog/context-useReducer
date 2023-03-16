import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./context/Context";
import { ContextReducerProvider } from "./context/ContextReducers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <ContextReducerProvider>
        <App />
      </ContextReducerProvider>
    </ContextProvider>
  </React.StrictMode>
);
