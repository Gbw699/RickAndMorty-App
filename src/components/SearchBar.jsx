import styled from "styled-components";
import { useState } from "react";

const Contenedor = styled.div``;
const Buscador = styled.input``;
const Boton = styled.button``;

export default function SearchBar(props) {
  let [characterId, setCharacterId] = useState();

  return (
    <Contenedor>
      <Buscador
        type="search"
        name="search"
        id="#"
        onChange={(e) => setCharacterId((characterId = e.target.value))}
      />
      <Boton onClick={() => props.onSearch(characterId)}>Agregar</Boton>
    </Contenedor>
  );
}
