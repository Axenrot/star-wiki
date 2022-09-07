import List from "../components/List";
import HomeBtn from "../components/HomeBtn";
import LoginBtn from "../components/LoginBtn";

const Characters = ({ characters }) => {
  return (
    <>
      <HomeBtn />
      <LoginBtn />
      <div className="container mx-auto px-3 sm:px-0">
        <List characters={characters} switchCS={true} />
      </div>
    </>
  );
};

export default Characters;
