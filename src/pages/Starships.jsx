import List from "../components/List";
import HomeBtn from "../components/HomeBtn";

const Starships = ({ starships }) => {
  return (
    <>
      <HomeBtn />
      <List starships={starships} switchCS={false} />
    </>
  );
};

export default Starships;
