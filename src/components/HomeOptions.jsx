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
    <div className="flex flex-wrap text-white h-[600px] justify-between">
      <button
        ref={cBtn}
        onClick={showCharacters}
        onMouseEnter={consoleLogC}
        className="mb-4 rounded-2xl w-full lg:w-[40%] border-2 border-semiblack shadow-xl shadow-semiblack overflow-hidden"
      >
        <div className="transition-all duration-1000 flex bg-character w-full h-full bg-center items-end pb-4 hover:scale-105"></div>
        <div className="relative bottom-[100px] w-full h-fit bg-black p-2 bg-opacity-40">
          <div className="w-full text-[200%] font-starjedi">Characters</div>
        </div>
      </button>

      <button
        ref={sBtn}
        onClick={showStarships}
        onMouseEnter={consoleLogS}
        className="mb-4 rounded-2xl w-full lg:w-[40%] border-2 border-semiblack shadow-xl shadow-semiblack overflow-hidden"
      >
        <div className="transition-all duration-1000 flex bg-starship w-full h-full bg-center bg-cover items-end pb-4 hover:scale-105"></div>
        <div className="relative bottom-[100px] w-full h-fit bg-black p-2 bg-opacity-40">
          <div className="w-full text-[200%] font-starjedi">Starships</div>
        </div>
      </button>
    </div>
  );
};

export default HomeOptions;
