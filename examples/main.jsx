import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

/**
 * ReactDOM is used just once to append the main React component to the actual
 * HTML page. 👋 Bye bye DOM APIs!
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  /**
   * StrictMode is an utility to help enforce coding style during development
   * https://reactjs.org/docs/strict-mode.html
   */
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
