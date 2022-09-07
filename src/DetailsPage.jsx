import Background from "./components/Background";
import Details from "./components/Details";

const DetailsPage = ({ url }) => {
  return (
    <Background>
      <div className="container mx-auto px-3">
        <Details url={url} />
      </div>
    </Background>
  );
};

export default DetailsPage;
