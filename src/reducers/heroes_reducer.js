import { ADD_CHARACTER } from "../actions";
import { createCharacter } from "./helpers";

// Reducer function to populate the one we selected
function heroes(state = [], action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let heroes = [...state, createCharacter(action.id)];
      return heroes;
    default:
      return state;
  }
}

export default heroes;
