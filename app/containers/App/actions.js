import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
} from './constants';

export function addGuest(guest) {
  return {
    type: ADD_GUEST,
    guest
  };
}

export function increment() {
  return {
    type: INCREMENT
  };
}
