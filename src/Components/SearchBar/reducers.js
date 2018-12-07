import {
  REQUEST_TRACKS_PENDING,
  REQUEST_TRACKS_SUCCESS,
  REQUEST_TRACKS_FAILED,
  SEARCHTERM_CHANGE
} from './constants';

const initialStateSearchResults = {
  searchResults: {
    playlists: [],
    artists: [],
    albums: [],
    tracks: []
  }
}

export const searchChange = (state= '', action={}) => {
  switch (action.type) {
    case SEARCHTERM_CHANGE:
      return Object.assign({}, state, {searchTerm: action.payload});
    default:
      return state;
  }
}

export const searchTracks = (state=initialStateSearchResults, action={}) => {
  switch (action.type) {
    case REQUEST_TRACKS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_TRACKS_SUCCESS:
      return Object.assign({}, state, {searchResults: action.payload, isPending: false})
    case REQUEST_TRACKS_FAILED:
      return Object.assign({}, state, {isPending: false})
    default:
      return state
  }
}