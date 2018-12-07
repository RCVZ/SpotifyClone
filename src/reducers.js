import {
  UPDATE_PLAYLIST_TRACKS,
  UPDATE_PLAYLIST_NAME
} from './constants';

const initialStatePlaylist = {
  playlist: []
}

const initialStatePlaylistName = {
  playlistName: 'New playlist'
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
