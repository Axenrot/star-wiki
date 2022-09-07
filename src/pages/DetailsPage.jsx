import Details from "../components/Details";
import HomeBtn from "../components/HomeBtn";
import LoginBtn from "../components/LoginBtn";

const DetailsPage = ({ url }) => {
  return (
    <>
      <HomeBtn />
      <LoginBtn />
      <div className="container mx-auto px-3 sm:px-0">
        <Details url={url} />
      </div>
    </>
  );
};

export default DetailsPage;
