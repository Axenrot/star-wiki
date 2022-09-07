import { RiLoginBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const LoginBtn = () => {
  return (
    <Link
      to={"/login"}
      className="fadein transition-all duration-200 fixed z-30 top-4 right-16 lg:right-[15vw] text-[25px] md:text-[35px] p-1 text-black bg-staryellow hover:bg-midblue  rounded-full"
    >
      <RiLoginBoxFill />
    </Link>
  );
};

export default LoginBtn;
