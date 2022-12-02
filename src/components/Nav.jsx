import React from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Contenedor = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
`;

export default function Nav(props) {
  return (
    <Contenedor>
      <NavLink to={"/home"}>
        <span>Home</span>
      </NavLink>
      <SearchBar onSearch={props.onSearch} />
      <NavLink to={"/about"}>
        <span>About</span>
      </NavLink>
    </Contenedor>
  );
}
