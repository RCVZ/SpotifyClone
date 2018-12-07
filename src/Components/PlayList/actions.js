import {
  UPDATE_PLAYLIST_TRACKS,
  UPDATE_PLAYLIST_NAME
} from './constants';


export const updatePlayList = (playlist) => ({
  type: UPDATE_PLAYLIST_TRACKS,
  payload: playlist
})

export const updatePlaylistName = (playlistName) => ({
  type: UPDATE_PLAYLIST_NAME,
  payload: playlistName
})
