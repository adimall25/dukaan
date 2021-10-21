import React from 'react';
import { fade, makeStyles } from '@mui/styles';

import { InputBase } from '@mui/material';

import Search from '@mui/icons-material/Search';

const useStyles = makeStyles((theme) => ({
  search: {
    borderRadius: 2,
    display: 'flex',
    backgroundColor: 'white',
    marginLeft: 10,
    width: '38%',
  },
  searchIcon: {
    padding: 5,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'scenter',
    color: 'blue',
  },
  inputRoot: {
    fontSize: 'unset',
    width: '100%',
  },
  inputInput: {
    paddingLeft: 20,
  },
}));
function SearchBar() {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search for products,brand and more"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
      <div className={classes.searchIcon}>
        <Search />
      </div>
    </div>
  );
}

export default SearchBar;
