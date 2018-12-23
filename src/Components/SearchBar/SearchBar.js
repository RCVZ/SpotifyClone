import React, { PureComponent } from 'react';
import './SearchBar.css';

import { connect } from 'react-redux';
import { searchChange, searchTracks } from './actions';
import { updatePlayList } from './../PlayList/actions';
import { Link, withRouter } from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }
  }

  handleSearchTerm = (e) => {
    let searchTerm = e.target.value;
    let timeout = null;
    clearTimeout(timeout);       
    timeout = setTimeout(() => {    
      this.setState({ searchTerm: searchTerm }, ()=>{
        this.props.search(this.state.searchTerm);
        this.props.history.push('/search');
      })
    }, 300);
  }

  addToPlaylist = (track, trackIndex = 0) => {
    let tracks = this.props.playlist.filter(element => element.id !== track.id);
    tracks.splice(trackIndex, 0, track);
    this.props.onUpdatePlaylist(tracks);
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') {
      this.props.search(this.state.searchTerm);
      this.props.history.push('/search');
    }
  }

  submitSearch = (e) => {
    this.props.search(this.state.searchTerm);   
  }

  render() {
    return(
      <div className='SearchBar' onKeyPress={this.handleEnter}>
        <input onChange={this.handleSearchTerm}  placeholder="Enter A Song, Album, or Artist"/>
        <Link to="/search">
          <FontAwesomeIcon className="Search_Button" icon={faSearch}/>
          <button type="submit" onClick={this.submitSearch} name="SEARCH" />
        </Link>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
