import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  deleteCharacter,
  addCharacterFavourite,
  deleteCharacterFavourite,
} from "../redux/actions";
import { connect } from "react-redux";

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

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.deleteCharacterFavourite(props.id);
    }
    if (!isFav) {
      setIsFav(true);
      props.addCharacterFavourite(props);
    }
  };

  return (
    <Container>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <Boton onClick={() => props.deleteCharacter(props.id)}>X</Boton>
      <Imagen src={props.image} alt="img" />
      <NavLink to={`/detail/${props.id}`}>
        <Nombre>{props.name}</Nombre>
      </NavLink>
      <Caracteristicas>{props.species}</Caracteristicas>
      <Caracteristicas>{props.gender}</Caracteristicas>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCharacterFavourite: (character) =>
      dispatch(addCharacterFavourite(character)),
    deleteCharacterFavourite: (id) => dispatch(deleteCharacterFavourite(id)),
    deleteCharacter: (id) => dispatch(deleteCharacter(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
