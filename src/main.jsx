import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DetailsPage from "./DetailsPage";
import "./styles/global.css";
import "./assets/Starjedi.woff";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <DetailsPage url="https://swapi.dev/api/people/1/" />
    </BrowserRouter>
  </React.StrictMode>
);
