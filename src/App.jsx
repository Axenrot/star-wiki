import { Routes, Route, Navigate } from "react-router-dom";
import Background from "./components/Background";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Starships from "./pages/Starships";
import LoginPage from "./pages/LoginPage";
import DetailsPage from "./pages/DetailsPage";
import { useStarWiki } from "./context";

function App() {
  const { characters, starships } = useStarWiki();
  return (
    <Background>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/characters"
          element={<Characters characters={characters} />}
        />
        {/*Se o PageType for True exibe a página de detalhes dos Personagens*/}
        <Route path="/characters/:id" element={<DetailsPage pageType />} />
        <Route
          path="/starships"
          element={<Starships starships={starships} />}
        />
        {/*Se o PageType for False (ou undefined) exibe a página de detalhes das Naves*/}
        <Route path="/starships/:id" element={<DetailsPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Background>
  );
}

export default App;
