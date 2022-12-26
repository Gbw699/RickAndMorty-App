import { addCharacter } from "../redux/actions";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Contenedor = styled.div``;
const Buscador = styled.input``;
const Boton = styled.button``;

export default function SearchBar(props) {
  const dispatch = useDispatch()
  let [characterId, setCharacterId] = useState();

  return (
    <Contenedor>
      <Buscador
        type="search"
        name="search"
        id="#"
        onChange={(e) => setCharacterId((characterId = e.target.value))}
      />
      <Boton onClick={() => dispatch(addCharacter(characterId))}>Agregar</Boton>
    </Contenedor>
  );
}
