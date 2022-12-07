export const ADD_CHARACTER = "ADD_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";

export const addCharacter = (character) => {
  return { type: ADD_CHARACTER, payload: character };
};
export const deleteCharacter = (id) => {
  return { type: DELETE_CHARACTER, payload: id };
};
