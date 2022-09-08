import ListItem from "./ListItem";
import { useNavigate } from "react-router-dom";

export default function List({ characters, starships, pageType }) {
  const navigate = useNavigate();
  return pageType ? (
    <div className="fadein overflow-hidden shadow-xl shadow-semiblack rounded-lg mb-[15vh] mt-20">
      <div id="TITLE" className="bg-charactersbg bg-cover bg-top">
        <h3 className="py-12 bg-black bg-opacity-40 relative text-[60px] md:text-[100px] text-white text-center font-starjedi w-full h-full select-none">
          Characters
        </h3>
      </div>
      <div className="stretch-characters overflow-hidden select-none">
        <div className="bg-semiblack bg-opacity-95 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow sm:col-span-2 text-xl text-end italic font-bold">
            Gender
          </dd>
        </div>
        {characters.map((character, index) => (
          <ListItem
            key={character.name}
            name={character.name}
            gender={character.gender}
            id={index}
            pageType
          />
        ))}
      </div>

      <div className="border-t border-zinc-900">
        <dl>
          <a
            onClick={() => navigate("/")}
            className="transition-all duration-300 text-semiblack bg-staryellow hover:bg-midblue hover:text-yellow-100 px-4 py-5 flex sm:px-6 text-sm font-medium w-full justify-center"
          >
            Go home?
          </a>
        </dl>
      </div>
    </div>
  ) : (
    <div className="fadein overflow-hidden shadow-xl shadow-semiblack rounded-lg mb-[15vh] mt-20">
      <div id="TITLE" className="bg-starshipsbg bg-cover bg-top">
        <h3 className="py-12 bg-black bg-opacity-40 relative text-[60px] md:text-[100px] text-white text-center font-starjedi w-full h-full select-none">
          Starships
        </h3>
      </div>
      <div className="stretch-starships overflow-hidden select-none">
        <div className="bg-semiblack bg-opacity-95 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow sm:col-span-2 text-xl font-bold text-end italic">
            Manufacturer
          </dd>
        </div>
        {starships.map((starship, index) => (
          <ListItem
            key={starship.name}
            name={starship.name}
            manufacturer={starship.manufacturer}
            id={index}
          />
        ))}
      </div>

      <div className="border-t border-zinc-900">
        <dl>
          <a
            onClick={() => navigate("/")}
            className="transition-all duration-300 text-semiblack bg-staryellow hover:bg-midblue hover:text-yellow-100 px-4 py-5 flex sm:px-6 text-sm font-medium w-full justify-center"
          >
            Go home?
          </a>
        </dl>
      </div>
    </div>
  );
}
