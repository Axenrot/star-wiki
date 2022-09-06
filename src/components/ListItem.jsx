import { FaMale, FaFemale, FaRobot } from "react-icons/fa";

const ListItem = ({ name, gender, manufacturer = "" }) => {
  return (
    <div className="bg-semiblack bg-opacity-95 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-darkgray">
      <dt className="text-xl font-medium text-staryellow">{name}</dt>
      <dd className="text-staryellow sm:col-span-2 text-xl">
        {gender == "male" && <FaMale className="ml-auto" />}
        {gender == "female" && <FaFemale className="ml-auto" />}
        {gender == "n/a" && <FaRobot className="ml-auto" />}
        {manufacturer != "" && (
          <div className="text-end text-lg italic">{manufacturer}</div>
        )}
      </dd>
    </div>
  );
};

export default ListItem;