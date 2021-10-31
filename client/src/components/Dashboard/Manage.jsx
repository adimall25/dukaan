import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  boxHead: {
    backgroundColor: 'black',
    color: 'white',
    width: '50%',
    paddingTop: '10px',
    paddingBottom: '10px',
    display: 'inline-block',
    margin: '2% auto',
  },
});

function Manage() {
  const classes = useStyles();
  return (
    <div className="card">
      <h5 className="card-title card-header">Shop</h5>
      <ul className="list-group list-group-flush">
        Manage and Organize your Shop
        {/* <button type="button" className="btn btn-dark">
          Dark
        </button> */}
        <Box className={classes.boxHead}>
          <Typography>Settings</Typography>
        </Box>
      </ul>
    </div>
  );
}

export default Manage;
