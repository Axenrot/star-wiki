//ao inicializar a página, busca-se aqui toda a informação necessária da API e armazenando em variáveis
//para prevenir carregamentos futuros.
//Utilizei o Context para visualizar a informação onde for necessário (na página de detalhes).
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { swapi } from "../client/axios";

const defaultStates = {
  next: null,
  results: [],
};

const defaultValues = {
  characters: defaultStates,
  starships: defaultStates,
  vehicles: defaultStates,
  planets: defaultStates,
};
const StarWikiContext = createContext(defaultValues);

export const useStarWiki = () => useContext(StarWikiContext);

export const StarWikiProvider = ({ children }) => {
  const [characters, setCharacters] = useState(defaultStates);
  const [starships, setStarships] = useState(defaultStates);
  const [vehicles, setVehicles] = useState(defaultStates);
  const [planets, setPlanets] = useState(defaultStates);

  async function getData(slug) {
    const response = await swapi.get(slug);
    return { next: response.data.next, results: response.data.results };
  }

  async function getMoreData(next) {
    const response = await axios.get(next);
    return { next: response.data.next, results: response.data.results };
  }

  const getAllData = async () => {
    const chars = await getData("people");
    const star = await getData("starships");
    const vehi = await getData("vehicles");
    const plan = await getData("planets");
    setCharacters(chars);
    setStarships(star);
    setVehicles(vehi);
    setPlanets(plan);
  };

  const getMoreCharacters = async () => {
    const chars = await getMoreData(characters.next);
    setCharacters({
      next: chars.next,
      results: characters.results.concat(chars.results),
    });
  };

  const getMoreStarships = async () => {
    const stars = await getMoreData(starships.next);
    setStarships({
      next: stars.next,
      results: starships.results.concat(stars.results),
    });
  };

  const getMoreVehicles = async () => {
    const vehi = await getMoreData(vehicles.next);
    setVehicles({
      next: vehi.next,
      results: vehicles.results.concat(vehi.results),
    });
  };

  const getMorePlanets = async () => {
    const plan = await getMoreData(planets.next);
    setPlanets({
      next: plan.next,
      results: planets.results.concat(plan.results),
    });
  };

  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
    characters.next && getMoreCharacters();
  }, [characters]);

  useEffect(() => {
    starships.next && getMoreStarships();
  }, [starships]);

  useEffect(() => {
    vehicles.next && getMoreVehicles();
  }, [vehicles]);

  useEffect(() => {
    planets.next && getMorePlanets();
  }, [planets]);

  return (
    <StarWikiContext.Provider
      value={{
        characters: characters.results,
        starships: starships.results,
        vehicles: vehicles.results,
        planets: planets.results,
      }}
    >
      {children}
    </StarWikiContext.Provider>
  );
};
