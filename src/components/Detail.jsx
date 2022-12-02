import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

export default function Detail() {
  const { detailId } = useParams();
  const [character,setCharacter] = useState({})
  

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
       .then((response) => response.json())
       .then((char) => {
          if (char.name) {
             setCharacter(char);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       })
       .catch((err) => {
          window.alert('No hay personajes con ese ID');
       });
    return setCharacter({});
 }, [detailId]);

  return <div>
    <h1>{character.name}</h1>
    <p value="status">Status: {character.status}</p>
    <p value="especie">Especie: {character.specie}</p>
    <p value="genero">Género: {character.gender}</p>
    <p value="origen">Origen: {character.origin?.name}</p>
    <img src={character.image} alt="img" />
    <NavLink to={"/home"}>
        <button>Volver</button>
    </NavLink>
  </div>;
}
