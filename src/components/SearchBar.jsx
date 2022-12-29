import { addCharacter } from "../redux/actions";
import styled from "styled-components";
import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Contenedor = styled.div``;
const Buscador = styled.input``;
const Boton = styled.button``;

export default function SearchBar(props) {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.allCharacters);
  let [characterId, setCharacterId] = useState();
  
  
  const handleDispatch = () => {
    let flag = true;
    allCharacters.forEach((character) => {
      if (character.id === parseInt(characterId)) {
        flag = false;
        return window.alert("El personaje ya se encuentra en la página");
      }
    });
    flag && dispatch(addCharacter(characterId));
  };
  
  return (
    <Contenedor>
      <Buscador
        type="search"
        name="search"
        id="#"
        onChange={(e) => setCharacterId((characterId = e.target.value))}
      />
      <Boton onClick={handleDispatch}>Agregar</Boton>
    </Contenedor>
  );
}
