export const ADD_CHARACTER_FAVOURITE = "ADD_CHARACTER_FAVOURITE";
export const DELETE_CHARACTER_FAVOURITE = "DELETE_CHARACTER_FAVOURITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

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
