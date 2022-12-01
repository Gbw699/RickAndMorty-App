import Card from "./Card";
import styled from "styled-components";

const Contenedor = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function Cards(props) {
  const { characters } = props;
  const element = characters.map((character, index) => (
    <Card
      name={character.name}
      species={character.species}
      gender={character.gender}
      image={character.image}
      id={character.id}
      key={index}
      onClose={props.onClose}
    />
  ));
  return <Contenedor>{element}</Contenedor>;
}
