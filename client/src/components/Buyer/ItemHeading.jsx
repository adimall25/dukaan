import { Box, Typography } from '@mui/material';
import { navData } from '../../constants/data.js';
import * as React from 'react';
import { makeStyles } from '@mui/styles';

const upStyles = makeStyles({
  component: {
    display: 'flex',
    margin: '100px 100px 10px 100px',
    justifyContent: 'space-between',
  },
  container: {
    textAlign: 'center',
    padding: '0 8px 0 8px',
  },
  image: {
    width: 128,
    height: 128,
    border: 'solid white 4px',
    borderRadius: '60%',
  },
  text: {
    color: '#ffff',
  },
});

function ItemHeading() {
  const classes = upStyles();
  return (
    <div className={classes.component}>
      {navData.map((data) => (
        <Box className={classes.container}>
          <img className={classes.image} src={data.url} />
          <Typography className={classes.text}>{data.text}</Typography>
        </Box>
      ))}
    </div>
  );
}

export default ItemHeading;
