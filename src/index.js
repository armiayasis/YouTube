import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {store} from "./utils/Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  
    <Provider store={store}>
      <App />
    </Provider>
    
  </>
);
