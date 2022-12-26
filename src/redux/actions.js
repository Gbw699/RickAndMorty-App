export const ADD_CHARACTER = "ADD_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const ADD_CHARACTER_FAVOURITE = "ADD_CHARACTER_FAVOURITE";
export const DELETE_CHARACTER_FAVOURITE = "DELETE_CHARACTER_FAVOURITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addCharacter = (id) => {
  return async (dispatch) => {
    await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          window.alert(data.error)
        } else {
          dispatch({ type: ADD_CHARACTER, payload: data });
        }
      });
  };
  //.then((data) => console.log(data.error))
};
export const deleteCharacter = (id) => {
  return { type: DELETE_CHARACTER, payload: id };
};

export const addCharacterFavourite = (character) => {
  return { type: ADD_CHARACTER_FAVOURITE, payload: character };
};
export const deleteCharacterFavourite = (id) => {
  return { type: DELETE_CHARACTER_FAVOURITE, payload: id };
};
export const filterCards = (status) => {
  return { type: FILTER, payload: status };
};
export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};
