import React from "react";
import ReactDOM from "react-dom/client";
/**
 * "BrowserRouter" doesn't work when deploying a webapp in a sub-directory
 * like "https://mysite.com/myapp" so its better to switch to the
 * "HashRouter" module, and this doesn't require ANY change in the code
 * written so far.
 */
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

// Higher order components

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
