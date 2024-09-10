import { routes } from "./Routes";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { useGlobalContext } from "./Context/Context";

function App() {
  const { theme } = useGlobalContext();

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.detail} element={<Detail />} />
          <Route path={routes.favs} element={<Favs />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
