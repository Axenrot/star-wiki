const HomeOptions = ({ showCharacters, showStarships }) => {
  return (
    <div className="flex flex-wrap text-white h-[600px] justify-between px-3 sm:px-0">
      <button className="flex bg-character mb-4 rounded-md w-full lg:w-[40%] bg-center border-2 items-end pb-3">
        <div className="w-full bg-black p-2 bg-opacity-40">
          <div
            className="w-full text-[200%] font-starjedi"
            onClick={showCharacters}
          >
            Characters
          </div>
        </div>
      </button>

      <button className="flex bg-starship mb-4 rounded-md w-full lg:w-[40%] bg-cover bg-center border-2 items-end pb-3">
        <div className="w-full bg-black p-2 bg-opacity-40">
          <div
            className="w-full text-[200%] font-starjedi"
            onClick={showStarships}
          >
            Starships
          </div>
        </div>
      </button>
    </div>
  );
};

export default HomeOptions;
