import { ADD_CHARACTER_FAVOURITE, DELETE_CHARACTER_FAVOURITE, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  AllCharactersFavourite: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHARACTER_FAVOURITE:
      return {
        ...state,
        myFavorites: [...state.AllCharactersFavourite, action.payload],
        AllCharactersFavourite: [...state.AllCharactersFavourite, action.payload],
      };
    case DELETE_CHARACTER_FAVOURITE:
      const newFavorites = state.myFavorites.filter(
        (element) => element.id !== action.payload
      );
      return { ...state, myFavorites: [...newFavorites] };
    case FILTER:
      const copiaAllCharactersFavouriteFilter = [...state.AllCharactersFavourite];
      return {
        ...state,
        myFavorites: copiaAllCharactersFavouriteFilter.filter(
          (element) => element.gender === action.payload
        ),
      };
    case ORDER:
      const copiaAllCharactersFavouriteOrder = [...state.AllCharactersFavourite];
      if (action.payload === "Ascendente") {
        return {
          ...state,
          myFavorites: copiaAllCharactersFavouriteOrder.sort(
            (elementA, elementB) => elementA.id - elementB.id
          ),
        };
      } else if (action.payload === "Descendente") {
        return {
          ...state,
          myFavorites: copiaAllCharactersFavouriteOrder.sort(
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
