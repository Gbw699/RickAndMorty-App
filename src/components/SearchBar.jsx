export default function SearchBar(props) {
  return (
    <div>
      <input type="search" />
      <button onClick={props.onSearch("Texto para remplazar con characterID")}>
        Agregar
      </button>
    </div>
  );
}
