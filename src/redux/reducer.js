import {ADD_CHARACTER, DELETE_CHARACTER} from "./actions"

const initialState = {
  myFavorites: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHARACTER:
        return {...state, myFavorites:[...state.myFavorites, action.payload]}
    case DELETE_CHARACTER:
        const newFavorites = state.myFavorites.filter(element => element.id !== action.payload)
        return{...state, myFavorites:[...newFavorites]}
    default:
      return { ...state };
  }
}
