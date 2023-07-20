import { ADD_FAV, REMOVE_FAV, ADD_CHAR, REMOVE_CHAR, FILTER, RESET, FILTER_A_Z,PREV, NEXT, CREATE_CHAR } from "./actionType";

export function addChar(char) {
  return {
    type: ADD_CHAR,
    payload: char,
  };
}
export function removeChar(id) {
  return {
    type: REMOVE_CHAR,
    payload: id,
  };
}
export function addFav(char) {
  return {
    type: ADD_FAV,
    payload: char,
  };
}
export function removeFav(id) {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
}
export function filterGender(gender) {
    return {
      type: FILTER,
      payload: gender,
    };
  }
  export function filterAtoZ(aOz) {
    return {
      type: FILTER_A_Z,
      payload: aOz,
    };
  }

  export function reset() {
    return {
      type: RESET,
    };
  }

  export function prev() {
    return {
      type: PREV,
    };
  }
  export function next() {
    return {
      type: NEXT,
    };
  }

  export function createCharacter(character) {
    return {
      type: CREATE_CHAR,
      payload: character
    };
  }


  
