import {SEARCHTERM_CHANGE} from './constants';

export const searchChange = (searchTerm) => ({
  type:SEARCHTERM_CHANGE,
  payload: searchTerm
})
