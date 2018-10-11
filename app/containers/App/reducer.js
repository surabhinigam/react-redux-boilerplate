/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  INCREMENT,
  ADD_GUEST
} from './constants';

// The initial state of the App
const initialState = fromJS({
  guestCount: 0,
  guestList: []
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state
        .set('guestCount', state.guestCount + 1);
    case ADD_GUEST:
      return state
        .set('guestList', state.guestList.concat(action.guest))
    default:
      return state;
  }
}

export default appReducer;
