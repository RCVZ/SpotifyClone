import React, { PureComponent } from 'react';
import './SearchBar.css';

import { connect } from 'react-redux';
import { searchChange, searchTracks } from './actions';
import { updatePlayList } from './../PlayList/actions';
import { Link } from "react-router-dom";

import Button from '../Button/Button';

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchTracks.searchResults,
    isPending: state.searchTracks.isPending,
    searchTerm: state.searchChange.searchTerm,
    playlist: state.updatePlayList.playlist,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchTracks: (searchTerm) => dispatch(searchTracks(searchTerm)),
    onSearchTermChange: (searchTerm) => dispatch(searchChange(searchTerm)),
    onUpdatePlaylist: (playlist) => dispatch(updatePlayList(playlist))
  }
}

class SearchBar extends PureComponent {

  handleSearchTerm = (e) => {
    this.props.onSearchTermChange(e.target.value); 
    let timeout = null;
    clearTimeout(timeout);       
    timeout = setTimeout(() => {    
      this.props.onSearchTracks(this.props.searchTerm);
    }, 1000);
  }

  addToPlaylist = (track, trackIndex = 0) => {
    let tracks = this.props.playlist.filter(element => element.id !== track.id);
    tracks.splice(trackIndex, 0, track);
    this.props.onUpdatePlaylist(tracks);
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') {
      this.props.onSearchTracks(this.props.searchTerm)
    }
  }

  submitSearch = (e) => {
    this.props.onSearchTracks(this.props.searchTerm);    
  }

  render() {
    return(
      <div className='SearchBar' onKeyPress={this.handleEnter}>
        <input onChange={this.handleSearchTerm}  placeholder="Enter A Song, Album, or Artist"/>
        <Link to="/search"><Button type="submit" onClick={this.submitSearch} name="SEARCH" /></Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
