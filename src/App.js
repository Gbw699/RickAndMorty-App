import Cards from "./components/Cards";
import SearchBar from "./components/SearchBar";
import characters from "./data";
import styled from "styled-components";
import img from "./img/hd-wallpaper-5858656.jpg";

const Contenedor = styled.div`
  background-image: url(${img});
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Contenedor className="App">
      <Cards characters={characters} />
      <hr />
      <div>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
    </Contenedor>
  );
}

export default App;
