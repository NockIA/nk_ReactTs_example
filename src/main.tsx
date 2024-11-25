import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import "./styles/_palette.scss";
import Ways from "./config/ways.tsx";
import { Provider } from "react-redux";
import store from "./services/store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Ways />
    </Provider>
  </React.StrictMode>
);
