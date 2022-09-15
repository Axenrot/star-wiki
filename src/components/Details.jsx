import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useStarWiki } from "../context";

export default function Details({ pageType }) {
  //todas as informações da API estão guardadas por completo nas variáveis do contexto StarWiki
  const { characters, vehicles, planets, starships } = useStarWiki();
  //Pega o ID do endereço da página e subtrai 1 para pegar o personagem ou a nave correspondente no array do contexto
  const { id } = useParams();
  const arrayID = id - 1;
  //set de todas as informações necessárias para a exibição da página de detalhes
  const [data, setData] = useState({});
  const [filmsList, setFilmsList] = useState([]);
  const [vehiclesList, setVehiclesList] = useState([]);
  const [starshipsList, setStarshipsList] = useState([]);
  const [pilotsList, setPilotsList] = useState([]);
  const [planet, setPlanet] = useState("");

  //Para prevenir checagens na API toda vez que o usuário acessar uma página de detalhes,
  //inicio o armazenamento das informações assim que a página carrega para que possamos acessá-las instantaneamente

  //Visto que todas as informações estão armazenadas no Contexto, as funções GET funcionam da seguinte forma:
  //1 - Recebo uma lista de URLs no objeto Data
  //2 - Checo no parâmetro do contexto qual elemento do Array possui como parâmetro um URL igual ao da lista Recebida
  //3 - Retorno o parâmetro NAME do elemento que passar no teste Find()
  //4 - Adiciono esses elementos em uma lista e após checar todos passo a lista como parâmetro do setList()
  function getFilms() {
    let list = [];
    if (data.films) {
      data.films.map((film) => {
        if (film.substr("https://swapi.dev/api/films/".length, 1) == "1") {
          list.push("A New Hope");
        } else if (
          film.substr("https://swapi.dev/api/films/".length, 1) == "2"
        ) {
          list.push("The Empire Strikes Back");
        } else if (
          film.substr("https://swapi.dev/api/films/".length, 1) == "3"
        ) {
          list.push("Return of the Jedi");
        } else if (
          film.substr("https://swapi.dev/api/films/".length, 1) == "4"
        ) {
          list.push("The Phantom Menace");
        } else if (
          film.substr("https://swapi.dev/api/films/".length, 1) == "5"
        ) {
          list.push("Attack of the Clones");
        } else if (
          film.substr("https://swapi.dev/api/films/".length, 1) == "6"
        ) {
          list.push("Revenge of the Sith");
        }
      });
    }
    setFilmsList(list);
  }

  function getStarships() {
    let list = [];
    if (data.starships) {
      data.starships.map((starship) => {
        const item = starships.find((ship) => {
          return ship.url == starship;
        });
        list.push(item.name);
      });
    }
    setStarshipsList(list);
  }

  function getVehicles() {
    let list = [];
    if (data.vehicles) {
      data.vehicles.map((vehicle) => {
        const item = vehicles.find((vehi) => {
          return vehi.url == vehicle;
        });
        list.push(item.name);
      });
    }
    setVehiclesList(list);
  }

  function getPilots() {
    let list = [];
    if (data.pilots) {
      data.pilots.map((pilot) => {
        const item = characters.find((character) => {
          return character.url == pilot;
        });
        list.push(item.name);
      });
    }
    setPilotsList(list);
  }

  function getPlanet() {
    if (data.homeworld) {
      const item = planets.find((planet) => {
        return planet.url == data.homeworld;
      });
      setPlanet(item.name);
    }
  }

  //se houver alguma informação já armazenada no array dos personagens e das naves a função permite o chamado do setData()
  function getData() {
    if (pageType && characters[arrayID]) {
      setData(characters[arrayID]);
    } else if (!pageType && starships[arrayID]) {
      setData(starships[arrayID]);
    }
  }

  //Assim que carrega a página obtém a Informação relacionada ao objeto a ser detalhado
  useEffect(() => {
    getData();
  }, [characters]);

  //Quando tiver com a informação a ser detalhada, obtém as
  //listas de informações secundárias para serem exibidas de forma dinâmica.
  //Da o Get de acordo com o tipo de página.
  useEffect(() => {
    getFilms();
    pageType && getStarships();
    pageType && getPlanet();
    pageType && getVehicles();
    !pageType && getPilots();
  }, [data]);

  return pageType ? (
    <div className="fadein grid grid-rows-6 grid-cols-4 overflow-hidden bg-semiblack bg-opacity-95 shadow-xl shadow-semiblack rounded-lg mb-[15vh] mt-10 min-h-[500px] select-none">
      <div
        id="BG"
        className="sm:h-full bg-characterdetail sm:bg-characterdetail-sm lg:bg-characterdetail-lg bg-no-repeat bg-bottom sm:bg-left bg-cover col-span-full row-span-1 sm:row-span-full sm:col-span-2 sm:order-2 select-none"
      />

      <div className="text-staryellow flex flex-col row-span-5 sm:row-span-full col-span-full sm:col-span-2 overflow-hidden">
        <h3 className="text-white font-starjedi px-3 sm:px-5 py-2 text-[20px] md:text-[30px] font-bold select-none">
          Character Details{console.log(data, characters)}
        </h3>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Name:</dt>
          <dd className="italic text-end capitalize">{data.name}</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Homeland:</dt>
          <dd className="italic text-end capitalize">{planet}</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Birth year:</dt>
          <dd className="italic text-end capitalize">{data.birth_year}</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Gender:</dt>
          <dd className="italic text-end capitalize">{data.gender}</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Height:</dt>
          <dd className="italic text-end capitalize">{data.height} cm</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Weight:</dt>
          <dd className="italic text-end capitalize">{data.mass} kg</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Hair Color:</dt>
          <dd className="italic text-end capitalize">{data.hair_color}</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Eye Color:</dt>
          <dd className="italic text-end capitalize">{data.eye_color}</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Skin Color:</dt>
          <dd className="italic text-end capitalize">{data.skin_color}</dd>
        </div>
        <div className="text-lg px-3 py-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Movies:</dt>
          <div className="italic text-end capitalize">
            {filmsList.map((film) => (
              <div key={`${film}C`}>{film}</div>
            ))}
          </div>
        </div>
        <div className="text-lg px-3 py-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Starship:</dt>
          <div className="text-end italic capitalize">
            {starshipsList.length == 0 ? (
              <div>No Starships</div>
            ) : (
              starshipsList.map((ship) => <div key={`${ship}C`}>{ship}</div>)
            )}
          </div>
        </div>
        <div className="text-lg px-3 py-2 sm:gap-4 sm:px-6">
          <dt className="font-bold">Vehicles:</dt>
          <div className="italic text-end capitalize">
            {vehiclesList.length == 0 ? (
              <div>No Vehicles</div>
            ) : (
              vehiclesList.map((vehi) => <div key={`${vehi}C`}>{vehi}</div>)
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="fadein grid grid-rows-6 grid-cols-4 overflow-hidden bg-semiblack bg-opacity-95 shadow-xl shadow-semiblack rounded-lg mb-[15vh] mt-10 min-h-[500px]">
      <div
        id="BG"
        className="bg-starshipdetail sm:bg-starshipdetail-sm lg:bg-starshipdetail-lg bg-no-repeat bg-bottom sm:bg-left bg-cover col-span-full row-span-1 sm:row-span-full sm:col-span-2 sm:order-2 select-none"
      />

      <div className="text-staryellow flex flex-col row-span-5 sm:row-span-full col-span-full sm:col-span-2 overflow-hidden">
        <h3 className="text-white font-starjedi px-3 sm:px-5 py-2 text-[20px] md:text-[30px] font-bold select-none">
          Starship Details
        </h3>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Name:</dt>
          <dd className="italic text-end capitalize">{data.name}</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Model:</dt>
          <dd className="italic text-end capitalize">{data.model}</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Manufacturer:</dt>
          <dd className="italic text-end capitalize">{data.manufacturer}</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Class:</dt>
          <dd className="italic text-end capitalize">{data.starship_class}</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Hyperdrive Rating:</dt>
          <dd className="italic text-end capitalize">
            {data.hyperdrive_rating}
          </dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Length:</dt>
          <dd className="italic text-end capitalize">{data.length} m</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Passengers:</dt>
          <dd className="italic text-end capitalize">{data.passengers}</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Crew:</dt>
          <dd className="italic text-end capitalize">{data.crew}</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Pilots:</dt>
          <div className="italic text-end capitalize">
            {pilotsList.length == 0 ? (
              <div>No Pilots</div>
            ) : (
              pilotsList.map((pilot) => <div key={`${pilot}S`}>{pilot}</div>)
            )}
          </div>
        </div>
        <div className="text-lg px-3 py-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Movies:</dt>
          <div className="text-end italic capitalize">
            {filmsList.map((film) => (
              <div key={`${film}S`}>{film}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
