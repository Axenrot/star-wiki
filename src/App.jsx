import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { swapi } from "./client/axios";
import axios from "axios";
import Background from "./components/Background";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Starships from "./pages/Starships";
import LoginPage from "./pages/LoginPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  const [characters, setCharacters] = useState([]);
  const [nextCharacters, setNextCharacters] = useState(null);
  const [starships, setStarships] = useState([]);
  const [nextStarships, setNextStarships] = useState(null);

  async function getCharacters() {
    const response = await swapi.get("/people");
    setNextCharacters(response.data.next);
    setCharacters(response.data.results);
  }

  function getMoreCharacters() {
    if (nextCharacters != null) {
      axios.get(nextCharacters).then((response) => {
        setCharacters(characters.concat(response.data.results));
        setNextCharacters(response.data.next);
      });
    }
  }

  async function getStarships() {
    const response = await swapi.get("/starships");
    setNextStarships(response.data.next);
    setStarships(response.data.results);
  }

  function getMoreStarships() {
    if (nextStarships != null) {
      axios.get(nextStarships).then((response) => {
        setStarships(starships.concat(response.data.results));
        setNextStarships(response.data.next);
      });
    }
  }

  useEffect(() => {
    if (characters.length == 0) {
      getCharacters();
    } else {
      getMoreCharacters();
    }
  }, [nextCharacters]);

  useEffect(() => {
    if (starships.length == 0) {
      getStarships();
    } else {
      getMoreStarships();
    }
  }, [nextStarships]);

  return (
    <Background>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/characters"
          element={<Characters characters={characters} />}
        />
        <Route path="/characters/:id" element={<DetailsPage pageType />} />
        <Route
          path="/starships"
          element={<Starships starships={starships} />}
        />
        <Route path="/starships/:id" element={<DetailsPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Background>
  );
}

export default App;
