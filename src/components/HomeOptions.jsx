import { useRef } from "react";
import gsap from "gsap";

const HomeOptions = ({ showCharacters, showStarships }) => {
  const cBtn = useRef();
  const sBtn = useRef();

  function consoleLogC() {
    console.log(cBtn);
  }

  function consoleLogS() {
    console.log(sBtn);
  }

  return (
    <div className="flex flex-wrap text-white h-[600px] justify-between sm:px-0">
      <button
        ref={cBtn}
        onClick={showCharacters}
        onMouseEnter={consoleLogC}
        className="mb-4 rounded-md w-full lg:w-[40%] border-2 overflow-hidden"
      >
        <div className="transition-all duration-500 flex bg-character w-full h-full bg-center items-end pb-4 hover:scale-105"></div>
        <div className="relative bottom-[100px] w-full h-fit bg-black p-2 bg-opacity-40">
          <div className="w-full text-[200%] font-starjedi">Characters</div>
        </div>
      </button>

      <button
        ref={sBtn}
        onClick={showStarships}
        onMouseEnter={consoleLogS}
        className="mb-4 rounded-md w-full lg:w-[40%] border-2 overflow-hidden"
      >
        <div className="transition-all duration-500 flex bg-starship w-full h-full bg-center bg-cover items-end pb-4 hover:scale-105"></div>
        <div className="relative bottom-[100px] w-full h-fit bg-black p-2 bg-opacity-40">
          <div className="w-full text-[200%] font-starjedi">Starships</div>
        </div>
      </button>
    </div>
  );
};

export default HomeOptions;
