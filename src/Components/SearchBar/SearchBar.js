import React, { PureComponent } from 'react';
import './SearchBar.css';

import { Link, withRouter } from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


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
      this.setState({ searchTerm: searchTerm }, () => {
        this.props.search(this.state.searchTerm);
        //this.props.history.push('/search'); bugg
      })
    }, 800);
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

export default withRouter(SearchBar);
