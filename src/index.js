import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bulma/css/bulma.css";
import "./styles.scss";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { carReducer } from "./reducer/carReducer";

const store = createStore(combineReducers({ carReducer }));
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
