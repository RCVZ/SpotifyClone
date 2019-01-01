import React, { PureComponent } from 'react';
import './SearchBar.css';

import { Link, withRouter } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


class SearchBar extends PureComponent {
  handleSearchTerm = (e) => {
    let searchTerm = e.target.value;
    this.props.search(searchTerm);
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

export default withRouter(SearchBar);
