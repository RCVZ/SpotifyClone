import React, { PureComponent } from 'react';
import './SearchBar.css';

import { Link } from "react-router-dom";
import { ContextStore } from '../../Context/MainContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


class SearchBar extends PureComponent {
  constructor(props){
    super(props);

    this.delay = null;
  }
  
  static contextType = ContextStore;

  handleSearchTerm = (e) => {
    let searchTerm = e.target.value;
    this.context.updateState('searchTerm', searchTerm)
    clearTimeout(this.delay);
    this.delay = setTimeout(this.search(searchTerm), 16.7); 
  }

  search = (searchTerm) => {
    this.context.searchSpotify(searchTerm);
    if (this.props.location.pathname !== '/search') { 
      this.props.history.push('/search')
    }
  }

  render() {
    return(
      <div className='SearchBar'>
        <input onChange={this.handleSearchTerm}  placeholder="Enter A Song, Album, or Artist"/>
        <Link to="/search">
          <FontAwesomeIcon className="Search_Button" icon={faSearch}/>
          <button type="submit" onClick={this.submitSearch} name="SEARCH" />
        </Link>
      </div>
    );
  }
}

export default SearchBar;
