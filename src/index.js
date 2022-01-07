import "./style.css";
import App from "./App";
import { render } from "react-dom";
import React from "react";
import { store } from "./app/store";
import { Provider } from "react-redux";

render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById("root")
);
