import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchBar from './SearchBar';
import HeaderButton from './HeaderButton';
const useStyles = makeStyles(() => ({
  header: {
    background: '#fa361e',
    height: 65,
  },
  container: {
    display: 'flex',
  },
  component: {
    marginLeft: '12%',
    textDecoration: 'none',
    color: 'white',
  },
  subheading: {},

  subUrl: {
    marginLeft: 4,
    width: 10,
    height: 10,
  },
}));
const ToolBar = withStyles({
  root: {
    height: 65,
  },
})(Toolbar);

function Header() {
  const logoURL =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.header}>
        <ToolBar>
          <Link to="/" className={classes.component}>
            {/* <img className={classes.logo} src={logoURL} /> */}

            <Box className={classes.container}>
              <Typography className={classes.subheading}>
                Apni Dukaan
              </Typography>
              <img className={classes.subUrl} src={subURL} />
            </Box>
          </Link>
          <SearchBar />
          <HeaderButton />
        </ToolBar>
      </AppBar>
    </div>
  );
}

export default Header;
