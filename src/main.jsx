import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Details from "./Details";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Details url="https://swapi.dev/api/people/1/" />
  </React.StrictMode>
);
