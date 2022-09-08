import { FaMale, FaFemale } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { GiAlienSkull } from "react-icons/gi";
import { Link } from "react-router-dom";

const ListItem = ({ name, gender, manufacturer = "", id, pageType }) => {
  //Não deu tempo de implementar a funcionalidade da página de Login mas a funcionalidade da página seria a seguinte:
  //Se o usuário estiver autenticado o ListItem a ser retornado será um Link, caso contrário não é clicável
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

  //O id recebido pelo ListItem é o índice do mapping da lista de todos os personagens ou naves do componente Lista
  //Portanto o id da rota é somado a 1 para começar pelo número 1 em vez de 0;
  const isLogged = (
    <Link
      to={`/${pageType ? "characters" : "starships"}/${id + 1}`}
      className="flex justify-between bg-semiblack bg-opacity-95 px-4 py-5 w-full sm:px-6 border-b border-darkgray"
    >
      <dt className="text-xl font-medium text-staryellow w-fit capitalize">
        {name}
      </dt>
      <dd className="text-staryellow text-xl w-fit">
        {gender == "male" && <FaMale className="ml-auto" />}
        {gender == "female" && <FaFemale className="ml-auto" />}
        {(gender == "n/a" || gender == "none") && (
          <IoLogoAndroid className="ml-auto" />
        )}
        {gender == "hermaphrodite" && <GiAlienSkull className="ml-auto" />}
        {manufacturer != "" && (
          <div className="text-end text-lg italic capitalize">
            {manufacturer}
          </div>
        )}
      </dd>
    </Link>
  );
  return (
    <>
      {logged && isLogged}
      {!logged && isntLogged}
    </>
  );
};

export default ListItem;
