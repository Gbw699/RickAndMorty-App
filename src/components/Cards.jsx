import Card from "./Card";

export default function Cards(props) {
  const { characters } = props;
  const element = characters.map((character, index) => (
    <Card
      name={character.name}
      species={character.species}
      gender={character.gender}
      image={character.image}
      onClose={() => window.alert("Emulamos que se cierra la card")}
      key={index}
    />
  ));
  return <div>{element}</div>;
}
