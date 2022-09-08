import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import "./assets/Starjedi.woff";
import { BrowserRouter } from "react-router-dom";
import { StarWikiProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StarWikiProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StarWikiProvider>
  </React.StrictMode>
);
