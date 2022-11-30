import styled from "styled-components";

const Contenedor = styled.div`
  margin: 1rem;
`;
const Buscador = styled.input`
  margin-right: 0.5rem;
`;
const Boton = styled.button``;

export default function SearchBar(props) {
  return (
    <Contenedor>
      <Buscador type="search" name="search" id="" />
      <Boton
        onClick={() => props.onSearch("Texto para remplazar con characterID")}
      >
        Agregar
      </Boton>
    </Contenedor>
  );
}
