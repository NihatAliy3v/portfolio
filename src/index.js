import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/scss/index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import "./i18n";
import "driver.js/dist/driver.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <Router>
      <App />
    </Router>
  </ThemeProvider>
);
