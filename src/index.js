/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import { ToastProvider } from "react-toast-notifications";

import Home from "./pages/home";

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <Home />
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
