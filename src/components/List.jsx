import ListItem from "./ListItem";

export default function List({ characters }) {
  function consoleLog() {
    console.log(characters);
  }

  return (
    <div className="fadein overflow-hidden shadow-xl shadow-semiblack sm:rounded-lg mb-[15vh] ">
      <div id="TITLE" className="bg-charactersbg bg-cover bg-top">
        <h3 className="py-12 bg-black bg-opacity-40 relative text-[100px] text-white text-center font-starjedi w-full h-full select-none">
          Characters
        </h3>
      </div>
      <div className="stretch overflow-hidden select-none">
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
          <button
            className="transition-all duration-300 text-yellow-100 bg-midblue hover:text-semiblack hover:bg-staryellow px-4 py-5 flex sm:px-6 text-sm font-medium w-full justify-center"
            onClick={consoleLog}
          >
            See more!
          </button>
        </dl>
      </div>
    </div>
  );
}
