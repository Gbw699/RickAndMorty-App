import Card from "./Card";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCharacter} from "../redux/actions";

const Contenedor = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function Cards(props) {
  const characters = props.characters;
  const dispatch = useDispatch()
  const allCharacters = useSelector((state)=>state.allCharacters)
  console.log(allCharacters);

  useEffect(()=> {
    if (!allCharacters.length){
      dispatch(addCharacter(1))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const element = characters.map((character, index) => (
    <Card
      name={character.name}
      species={character.species}
      gender={character.gender}
      image={character.image}
      id={character.id}
      key={index}
      //onClose={props.onClose}
    />
  ));
  return <Contenedor>{element}</Contenedor>;
}
