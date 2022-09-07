import { FaMale, FaFemale } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { GiAlienSkull } from "react-icons/gi";

const ListItem = ({ name, gender, manufacturer = "", url, setUrl }) => {
  const logged = true;
  const isntLogged = (
    <div className="flex justify-between bg-semiblack bg-opacity-95 px-4 py-5 w-full sm:px-6 border-b border-darkgray">
      <dt className="text-xl font-medium text-staryellow w-fit">{name}</dt>
      <dd className="text-staryellow text-xl w-fit">
        {gender == "male" && <FaMale className="ml-auto" />}
        {gender == "female" && <FaFemale className="ml-auto" />}
        {(gender == "n/a" || gender == "none") && (
          <IoLogoAndroid className="ml-auto" />
        )}
        {gender == "hermaphrodite" && <GiAlienSkull className="ml-auto" />}
        {manufacturer != "" && (
          <div className="text-end text-lg italic">{manufacturer}</div>
        )}
      </dd>
    </div>
  );

  const isLogged = (
    <button
      onClick={() => console.log(name, url)}
      className="flex justify-between bg-semiblack bg-opacity-95 px-4 py-5 w-full sm:px-6 border-b border-darkgray"
    >
      <dt className="text-xl font-medium text-staryellow w-fit">{name}</dt>
      <dd className="text-staryellow text-xl w-fit">
        {gender == "male" && <FaMale className="ml-auto" />}
        {gender == "female" && <FaFemale className="ml-auto" />}
        {(gender == "n/a" || gender == "none") && (
          <IoLogoAndroid className="ml-auto" />
        )}
        {gender == "hermaphrodite" && <GiAlienSkull className="ml-auto" />}
        {manufacturer != "" && (
          <div className="text-end text-lg italic">{manufacturer}</div>
        )}
      </dd>
    </button>
  );
  return (
    <>
      {logged && isLogged}
      {!logged && isntLogged}
    </>
  );
};

export default ListItem;
