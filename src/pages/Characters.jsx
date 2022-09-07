import List from "../components/List";
import HomeBtn from "../components/HomeBtn";

const Characters = ({ characters }) => {
  return (
    <>
      <HomeBtn />
      <List characters={characters} switchCS={true} />
    </>
  );
};

export default Characters;
