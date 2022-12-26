import Cards from "./components/Cards";
import styled from "styled-components";
import Form from "./components/Form";
import Nav from "./components/Nav";
import About from "./components/About";
import Detail from "./components/Detail";
import Favorites from "./components/Favorites";
import img from "./img/hd-wallpaper-5858656.jpg";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Contenedor = styled.div`
  background-image: url(${img});
  background-size: cover;
  width: 100%;
  min-height: 100vh;
`;

function App() {
  const [access, setAccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const username = "gdbarimboim@gmail.com";
  const password = "hola123";
  const characters = useSelector((state) => state.allCharacters);

  //const [toggle, setToggle] = useState(1);

  //  useEffect(() => {
  //    onSearch(toggle);
  //    return () => onClose(toggle);
  //  }, [toggle]);

  //  useEffect(() => {
  //    onSearch(1);
  //    // eslint-disable-next-line react-hooks/exhaustive-deps
  //  }, []);

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      window.alert("UserName y/o Password incorrectos");
    }
  };

  return (
    <Contenedor className="App">
      {location.pathname !== "/" && <Nav />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards characters={characters} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      {/* <>
        <button onClick={() => setToggle(toggle === 1 ? 2 : 1)}>Hola</button>
      </>  */}
    </Contenedor>
  );
}

export default App;
