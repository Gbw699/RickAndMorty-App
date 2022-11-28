import Card from "./Card";

export default function Cards(props) {
  const { characters } = props;
  const element = characters.map((character, index) => (
    <div key={index}>
      <Card
        name={character.name}
        species={character.species}
        gender={character.gender}
        image={character.image}
        onClose={() => window.alert("Emulamos que se cierra la card")}
      />
    </div>
  ));
  return <div>{element}</div>;
}
