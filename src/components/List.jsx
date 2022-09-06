import ListItem from "./ListItem";

export default function List({ characters, starships }) {
  const characterList = (
    <div className="fadein overflow-hidden shadow-xl shadow-semiblack rounded-lg mb-[15vh] mt-20">
      <div id="TITLE" className="bg-charactersbg bg-cover bg-top">
        <h3 className="py-12 bg-black bg-opacity-40 relative text-[60px] md:text-[100px] text-white text-center font-starjedi w-full h-full select-none">
          Characters
        </h3>
      </div>
      <div className="stretch overflow-hidden select-none">
        <div className="bg-semiblack bg-opacity-95 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow sm:col-span-2 text-xl">
            <div className="text-end text-lg italic font-bold">Gender</div>
          </dd>
        </div>
        {characters.map((character) => (
          <ListItem
            key={character.name}
            name={character.name}
            gender={character.gender}
          />
        ))}
      </div>

      <div className="border-t border-zinc-900">
        <dl>
          <button className="transition-all duration-300 text-yellow-100 bg-midblue hover:text-semiblack hover:bg-staryellow px-4 py-5 flex sm:px-6 text-sm font-medium w-full justify-center">
            See more!
          </button>
        </dl>
      </div>
    </div>
  );

  const starshipList = (
    <div className="fadein overflow-hidden shadow-xl shadow-semiblack rounded-lg mb-[15vh] mt-20">
      <div id="TITLE" className="bg-starshipsbg bg-cover bg-center">
        <h3 className="py-12 bg-black bg-opacity-40 relative text-[70px] md:text-[100px] text-white text-center font-starjedi w-full h-full select-none">
          Starships
        </h3>
      </div>
      <div className="stretch overflow-hidden select-none">
        <div className="bg-semiblack bg-opacity-95 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-xl font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow sm:col-span-2 text-xl">
            <div className="text-end text-lg italic font-bold">
              Manufacturer
            </div>
          </dd>
        </div>
        {starships.map((starships) => (
          <ListItem
            key={starships.name}
            name={starships.name}
            manufacturer={starships.manufacturer}
          />
        ))}
      </div>

      <div className="border-t border-zinc-900">
        <dl>
          <button className="transition-all duration-300 text-semiblack bg-staryellow hover:bg-midblue hover:text-yellow-100 px-4 py-5 flex sm:px-6 text-sm font-medium w-full justify-center">
            See more!
          </button>
        </dl>
      </div>
    </div>
  );

  return (
    <>
      {characters.length > 0 && characterList}
      {starships.length > 0 && starshipList}
    </>
  );
}
