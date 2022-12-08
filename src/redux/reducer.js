import { ADD_CHARACTER, DELETE_CHARACTER, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case DELETE_CHARACTER:
      const newFavorites = state.myFavorites.filter(
        (element) => element.id !== action.payload
      );
      return { ...state, myFavorites: [...newFavorites] };
    case FILTER:
      const copiaAllCharactersFilter = [...state.allCharacters];
      return {
        ...state,
        myFavorites: copiaAllCharactersFilter.filter(
          (element) => element.gender === action.payload
        ),
      };
    case ORDER:
      const copiaAllCharactersOrder = [...state.allCharacters];
      if (action.payload === "Ascendente") {
        return {
          ...state,
          myFavorites: copiaAllCharactersOrder.sort(
            (elementA, elementB) => elementA.id - elementB.id
          ),
        };
      } else if (action.payload === "Descendente") {
        return {
          ...state,
          myFavorites: copiaAllCharactersOrder.sort(
            (elementA, elementB) => elementB.id - elementA.id
          ),
        };
      } else {
        break;
      }
    default:
      return { ...state };
  }
}
