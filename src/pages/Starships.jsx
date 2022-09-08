import List from "../components/List";
import HomeBtn from "../components/HomeBtn";
import LoginBtn from "../components/LoginBtn";

const Starships = ({ starships }) => {
  return (
    <>
      <HomeBtn />
      <LoginBtn />
      <div className="container mx-auto px-3 sm:px-0">
        <List starships={starships} />
      </div>
    </>
  );
};

export default Starships;
