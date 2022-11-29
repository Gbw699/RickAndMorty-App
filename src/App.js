import "./App.css";
import Cards from "./components/Cards";
import SearchBar from "./components/SearchBar";
import characters from "./data";

function App() {
  return (
    <div className="App" style={{ padding: "25px" }}>
      <hr />
      <Cards characters={characters} />
      <hr />
      <div>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
    </div>
  );
}

export default App;
