import React, { Component } from 'react';
import './Main.css';

import { connect } from 'react-redux';
import SearchResults from '../SearchResults/SearchResults';

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchTracks.searchResults
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'searchResults'
    }
  }

  // this.props.updateRoute = () => {
  //   onRouteChange('searchResults')
  // }

  onRouteChange = (route) => {
    console.log('test2')
    if(route === 'searchResults') {
      this.setState({ route: route });
    } else {
      this.setState({ route: route });
    }
  }

  render() {
    const { trackList, addToPlayList, onDragStart } = this.props;
    return(
      <div></div>
    );
  }
}

export default connect(mapStateToProps)(Main);
