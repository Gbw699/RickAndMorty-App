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

const Contenedor = styled.div`
  background-image: url(${img});
  background-size: cover;
  width: 100%;
  min-height: 100vh;
`;

function App() {
  // eslint-disable-next-line no-unused-vars
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const username = "gdbarimboim@gmail.com";
  const password = "hola123";
  // eslint-disable-next-line no-unused-vars
  //const [toggle, setToggle] = useState(1);

  // useEffect(() => {
  //   onSearch(toggle);
  //   return () => onClose(toggle);
  // }, [toggle]);

  useEffect(() => {
    onSearch(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = (character) => {
    let flag = true;
    characters.forEach((element) => {
      if (parseInt(character) === element.id) {
        window.alert(
          "El personaje que desea agregar ya se encuentra en la aplicación"
        );
        return (flag = false);
      }
    });
    flag &&
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
  };

  const onClose = (character) => {
    setCharacters((characters) =>
      characters.filter((element) => element.id !== character)
    );
  };

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
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      {/* <>
        <button onClick={() => setToggle(toggle === 1 ? 2 : 1)}>Hola</button>
      </> */}
    </Contenedor>
  );
}

export default App;
