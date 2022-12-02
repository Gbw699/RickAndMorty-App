import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  border: 1px solid black;
  width: fit-content;
  height: fit-content;
  padding: 0.5rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 5px black;
  margin: 2rem 0;
  background-color: white;
`;
const Boton = styled.button`
  width: fit-content;
  height: fit-content;
  border-radius: 5px;
  border: none;
  align-self: flex-end;
`;
const Imagen = styled.img`
  border-radius: 10px;
  box-shadow: 0 0 3px black;
`;
const Nombre = styled.h2`
  margin: 0.7rem;
`;
const Caracteristicas = styled.h3`
  margin: 0.5rem;
  align-self: flex-start;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.3rem;
  min-width: 5rem;
`;

export default function Card(props) {
  return (
    <Container>
      <Boton onClick={() => props.onClose(props.id)}>X</Boton>
      <Imagen src={props.image} alt="img" />
      <NavLink to={`/detail/${props.id}`}>
      <Nombre>{props.name}</Nombre>
      </NavLink>
      <Caracteristicas>{props.species}</Caracteristicas>
      <Caracteristicas>{props.gender}</Caracteristicas>
    </Container>
  );
}
