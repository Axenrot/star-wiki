import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { swapi } from "./client/axios";
import Background from "./components/Background";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Starships from "./pages/Starships";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [nextCharacters, setNextCharacters] = useState(null);
  const [starships, setStarships] = useState([]);
  const [nextStarships, setNextStarships] = useState(null);
  const [check, setCheck] = useState(true);

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

  function consoleLog() {
    console.log(starships);
  }
  return (
    <Background>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={<Characters characters={characters} />}
        />
        <Route
          path="/starships"
          element={<Starships starships={starships} />}
        />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Background>
  );
}

export default App;
