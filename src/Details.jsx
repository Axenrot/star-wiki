import Background from "./components/Background";
import Character from "./components/Character";

const Details = ({ url }) => {
  return (
    <Background>
      <div className="container mx-auto px-3">
        <Character url={url} />
      </div>
    </Background>
  );
};

export default Details;
