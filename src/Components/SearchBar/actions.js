import {
  REQUEST_TRACKS_PENDING,
  REQUEST_TRACKS_SUCCESS,
  REQUEST_TRACKS_FAILED,
  SEARCHTERM_CHANGE
  } from './constants';

  
import SpotifyApi from './../../util/Spotify';

export const searchChange = (searchTerm) => ({
  type:SEARCHTERM_CHANGE,
  payload: searchTerm
})

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

