import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Cards from "./Cards";
import { orderCards, filterCards } from "../redux/actions";
import { useDispatch } from "react-redux";

const Favorites = (props) => {
  const dispatch = useDispatch();
  //   const onClose = (character) => {
  //     setCharacters((characters) =>
  //       characters.filter((element) => element.id !== character)
  //     );
  //   };
  const handleDispatch = (e) => {
    if (e.target.value === "Ascendente" || e.target.value === "Descendente") {
      dispatch(orderCards(e.target.value));
    } else {
      dispatch(filterCards(e.target.value));
    }
  };

  return (
    <div>
      <div>
        <select onChange={handleDispatch}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handleDispatch}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <Cards characters={props.myFavorites} />
      <NavLink to={"/home"}>
        <button>Volver</button>
      </NavLink>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, null)(Favorites);
