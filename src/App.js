import Cards from "./components/Cards";
import styled from "styled-components";
import img from "./img/hd-wallpaper-5858656.jpg";
import Nav from "./components/Nav";
import { useState } from "react";

const Contenedor = styled.div`
  background-image: url(${img});
  background-size: cover;
  width: 100%;
  min-height: 100vh;
`;

function App() {
  // eslint-disable-next-line no-unused-vars
  let [characters, setCharacters] = useState([]);

  //   const example = {
  //     name: 'Morty Smith',
  //     species: 'Human',
  //     gender: 'Male',
  //     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  //  };

  const onSearch = (character) => {
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

  return (
    <Contenedor className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </Contenedor>
  );
}

export default App;
