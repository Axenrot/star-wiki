import Details from "../components/Details";
import BackBtn from "../components/BackBtn";
import HomeBtn from "../components/HomeBtn";
import LoginBtn from "../components/LoginBtn";

const DetailsPage = ({ pageType }) => {
  return (
    <>
      <BackBtn url={pageType ? "/characters" : "/starships"} />
      <HomeBtn />
      <LoginBtn />
      <div className="container mx-auto px-3 sm:px-0 lg:pt-6">
        <Details pageType={pageType} />
      </div>
    </>
  );
};

export default DetailsPage;
