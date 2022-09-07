import Login from "../components/Login";
import HomeBtn from "../components/HomeBtn";

const LoginPage = () => {
  return (
    <>
      <HomeBtn />
      <div className="container flex items-center justify-center h-[100vh] mx-auto px-4 sm:px-0">
        <Login />
      </div>
    </>
  );
};

export default LoginPage;
