import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Cards from "./Cards";
const Favorites = (props) => {
//   const onClose = (character) => {
//     setCharacters((characters) =>
//       characters.filter((element) => element.id !== character)
//     );
//   };
  return (
    <div>
      <Cards characters={props.myFavorites}  />
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
