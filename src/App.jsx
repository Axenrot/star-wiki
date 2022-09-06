import { useEffect, useState } from "react";
import Background from "./components/Background";
import { swapi } from "./client/axios";
import Banner from "./components/Banner";
import HomeOptions from "./components/HomeOptions";
import List from "./components/List";
import HomeBtn from "./components/HomeBtn";
import Starship from "./components/Starship";
import Character from "./components/Character";

function App() {
  const [characters, setCharacters] = useState([]);
  const [nextCharacters, setNextCharacters] = useState(null);
  const [starships, setStarships] = useState([]);
  const [nextStarships, setNextStarships] = useState(null);
  const [check, setCheck] = useState(true);

  useEffect(() => {});

  async function getCharacters() {
    const response = await swapi.get("/people");
    setCharacters(response.data.results);
    setNextCharacters(response.data.next);
  }

  function consoleLog() {
    console.log(characters);
  }

  async function getStarships() {
    const response = await swapi.get("/starships");
    setStarships(response.data.results);
    setNextStarships(response.data.next);
  }

  return (
    <Background>
      {(characters.length > 0 || starships.length > 0) && <HomeBtn />}
      <div className="container flex flex-col mx-auto px-3">
        {characters.length == 0 && starships.length == 0 && (
          <>
            <Banner />
            <HomeOptions
              showCharacters={getCharacters}
              showStarships={getStarships}
            />
          </>
        )}
        {(characters.length > 0 || starships.length > 0) && (
          <List characters={characters} starships={starships} />
        )}
      </div>
    </Background>
  );
}

export default App;
