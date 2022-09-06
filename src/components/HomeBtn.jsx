import { AiFillHome } from "react-icons/ai";

const HomeBtn = () => {
  return (
    <a
      href=""
      className="transition-all duration-200 fixed z-30 top-4 right-4 lg:right-[10vw] text-[25px] md:text-[35px] p-1 text-black bg-staryellow hover:bg-midblue  rounded-full"
    >
      <AiFillHome />
    </a>
  );
};

export default HomeBtn;
