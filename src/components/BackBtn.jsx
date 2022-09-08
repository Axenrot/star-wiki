import { IoCaretBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const BackBtn = ({ url }) => {
  return (
    <Link
      to={url}
      className="fadein transition-all duration-200 fixed z-30 top-4 left-4 lg:left-[10vw] text-[25px] md:text-[35px] p-1 text-black bg-staryellow hover:bg-midblue  rounded-full"
    >
      <IoCaretBackOutline className="relative right-[2px]" />
    </Link>
  );
};

export default BackBtn;
