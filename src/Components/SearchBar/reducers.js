import {SEARCHTERM_CHANGE} from './constants';

export const searchChange = (state= '', action={}) => {
  switch (action.type) {
    case SEARCHTERM_CHANGE:
      return Object.assign({}, state, {searchTerm: action.payload});
    default:
      return state;
  }
}
