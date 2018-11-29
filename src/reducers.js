import {
  REQUEST_TRACKS_PENDING,
  REQUEST_TRACKS_SUCCESS,
  REQUEST_TRACKS_FAILED,
  UPDATE_PLAYLIST_TRACKS,
  UPDATE_SEARCHRESULTS,
  UPDATE_PLAYLIST_NAME
} from './constants';

const initialStatePlaylist = {
  playlist: []
}

const initialStateSearchResults = {
  searchResults: {
    playlists: [],
    artists: [],
    albums: [],
    tracks: []
  }
}

const initialStatePlaylistName = {
  playlistName: 'New playlist'
}


export const searchTracks = (state=initialStateSearchResults, action={}) => {
  switch (action.type) {
    case REQUEST_TRACKS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_TRACKS_SUCCESS:
      return Object.assign({}, state, {searchResults: action.payload, isPending: false})
    case REQUEST_TRACKS_FAILED:
      return Object.assign({}, state, {isPending: false})
    case UPDATE_SEARCHRESULTS:
      return Object.assign({}, state, {searchResults: action.payload})
    default:
      return state
  }
}

export const updatePlayList = (state=initialStatePlaylist, action={}) => {
  switch (action.type) {
    case UPDATE_PLAYLIST_TRACKS:
      return Object.assign({}, state, {playlist: action.payload})
    default:
      return state;
  }
}

export const updatePlaylistName = (state=initialStatePlaylistName, action={}) => {
  switch (action.type) {
    case UPDATE_PLAYLIST_NAME:
      return Object.assign({}, state, {playlistName: action.payload})
    default:
      return state;
  }
}
