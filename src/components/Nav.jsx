import React from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const Contenedor = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
`;

export default function Nav(props) {
  return (
    <Contenedor>
      <SearchBar onSearch={props.onSearch} />
    </Contenedor>
  );
}
