import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { makeStyles } from '@mui/styles';
import { Typography, Box, Badge } from '@mui/material';
const useStyles = makeStyles(() => ({
  login: {
    backgroundColor: '#ffffff',
    textTransform: 'none',
    fontWeight: '600',
    borderRadius: '2',
    padding: '1px 40px',
    boxShadow: 'none',
  },
  wrapper: {
    display: 'flex',
    margin: '0 7% 0 auto',
    '& > *': {
      marginRight: 50,
      alignItems: 'center',
      textDecoration: 'none',
      color: '#fff',
    },
  },
  container: {
    display: 'flex',
  },
}));

function HeaderButton() {
  const classes = useStyles();

  return (
    <Link className={classes.wrapper}>
      <Link>
        {' '}
        <Typography>More</Typography>
      </Link>
      <Link to="/buyer/checkout" className={classes.container}>
        <Badge badgeContent={2} color="primary">
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Link>
    </Link>
  );
}

export default HeaderButton;
