import React from 'react';
import './SearchResults.css';

import Grid from '../Grid/Grid';

const SearchResults = ({ children }) => {
  return (
    <Grid>
      {children}
    </Grid>
  );
}


export default SearchResults;
