import React, { PureComponent } from 'react';
import './SearchBar.css';

import { connect } from 'react-redux';
import { searchChange } from './actions';

import Button from '../Button/Button';

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchChange.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchTermChange: (searchTerm) => dispatch(searchChange(searchTerm))
  }
}

class SearchBar extends PureComponent {
  handleSearchTerm = (e) => {
    this.props.onSearchTermChange(e.target.value);
    // this.props.searchSpotify(e.target.value);
  }

  handleEnter = (e) => {
    if(e.key === 'Enter') {
      this.props.searchSpotify(this.props.searchTerm);
      this.props.onRouteChange('searchResults'); // should be changed
    }
  }

  submitSearch = (e) => {
    this.props.searchSpotify(this.props.searchTerm);
    this.props.onRouteChange('searchResults'); // should be changed
  }

  render() {
    return(
      <div className='SearchBar' onKeyPress={this.handleEnter}>
        <input onChange={this.handleSearchTerm}  placeholder="Enter A Song, Album, or Artist"/>
        <Button type="submit" onClick={this.submitSearch} name="SEARCH" />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
