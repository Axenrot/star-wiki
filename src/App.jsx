import { useEffect, useState } from "react";
import Background from "./components/Background";
import { swapi } from "./client/axios";
import Banner from "./components/Banner";
import HomeOptions from "./components/HomeOptions";
import List from "./components/List";
import Login from "./components/Login";
import Spaceship from "./components/Spaceship";
import Character from "./components/Character";

function App() {
  const [characters, setCharacters] = useState([]);
  const [nextCharacters, setNextCharacters] = useState(null);
  const [starships, setStarships] = useState([]);
  const [nextStarships, setNextStarships] = useState(null);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (!check) {
      getCharacters();
      getStarships();
      setCheck(true);
    }
  });

  async function getCharacters() {
    const response = await swapi.get("/people");
    setCharacters(response.data.results);
    setNextCharacters(response.data.next);
    console.log(characters);
    console.log(nextCharacters);
  }

  async function getStarships() {
    const response = await swapi.get("/starships");
    setStarships(response.data.results);
    setNextStarships(response.data.next);
    console.log(starships);
    console.log(nextStarships);
  }

  return (
    <Background>
      <div className="container flex flex-col mx-auto">
        <Banner />
        <div className="mx-auto mb-5">
          <button
            onClick={getCharacters}
            className="border text-white w-fit self-center px-2 mx-2 rounded-sm bg-slate-600"
          >
            Characters
          </button>
          <button
            onClick={getStarships}
            className="border text-white w-fit self-center px-2 mx-2 rounded-sm bg-slate-600"
          >
            Starships
          </button>
        </div>

        <HomeOptions />
        <List />
        <Spaceship />

        <Login />
      </div>
    </Background>
  );
}

export default App;
