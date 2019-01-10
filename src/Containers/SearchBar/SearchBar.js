import React, { PureComponent } from 'react';
import './SearchBar.css';

import SpotifyApi from '../../util/Spotify';

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { ContextStore } from '../../Context/MainContext';


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
    this.delay = setTimeout(this.props.search(searchTerm), 16.7);
  }

  searchSpotify = (searchTerm) => {
    SpotifyApi.fullSearch(searchTerm).then((results) => {
      const { playlists, artists, albums, tracks } = results;
      this.tracks = tracks;
      this.setState({
        searchTerm: searchTerm,
        playlists: playlists,
        artists: artists,
        albums: albums,
        tracks: tracks
      }, this.props.history.push('/search'))
    })
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
