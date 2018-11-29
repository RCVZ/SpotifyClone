import {
  REQUEST_TRACKS_PENDING,
  REQUEST_TRACKS_SUCCESS,
  REQUEST_TRACKS_FAILED,
  UPDATE_PLAYLIST_TRACKS,
  UPDATE_SEARCHRESULTS,
  UPDATE_PLAYLIST_NAME
} from './constants';

import SpotifyApi from './util/Spotify';


export const searchTracks = (searchTerm) => (dispatch) => {
  dispatch({
    type: REQUEST_TRACKS_PENDING })
  SpotifyApi.fullSearch(searchTerm).then( data =>
    dispatch({
    type: REQUEST_TRACKS_SUCCESS,
    payload: data}))
  .catch( error =>
    dispatch({
    type: REQUEST_TRACKS_FAILED}))
}

export const updatePlayList = (playlist) => ({
  type: UPDATE_PLAYLIST_TRACKS,
  payload: playlist
})

export const updateSearchResults = (updatedResults) => ({
  type: UPDATE_SEARCHRESULTS,
  payload: updatedResults
})

export const updatePlaylistName = (playlistName) => ({
  type: UPDATE_PLAYLIST_NAME,
  payload: playlistName
})
