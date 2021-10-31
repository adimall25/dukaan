import React from 'react';
import '../../css/Box.css';
import { makeStyles } from '@mui/styles';
import OrderList from './OrderList';
import ProductList from './ProductList';
// import Verified from "./Verified";
// import Manage from "./Manage";
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles({
  head: {
    textAlign: 'left',
  },
  boxTop: {
    textAlign: 'left',
    backgroundColor: 'lightgray',
    padding: '2px',
    paddingLeft: '10px',
    color: 'white',
    textSizeAdjust: '5px',
    margin: '2% 0',
  },
  boxgrp: {
    marginBottom: '2%',
  },
  boxHead: {
    backgroundColor: '#09009B',
    width: '20%',
    paddingTop: '10px',
    paddingBottom: '10px',
    display: 'inline-block',
    margin: '2%',
  },
  indiv: {
    marginBottom: '2%',
  },
  text: {
    color: 'white',
  },
});

function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.head}>Dashboard</h1>
      <Box className={classes.boxTop}>
        <Typography>Dashboard</Typography>
      </Box>
      <div className={classes.boxgrp}>
        <Box className={classes.boxHead}>
          <Typography className={classes.text}>Products</Typography>
        </Box>
        <Box className={classes.boxHead}>
          <Typography className={classes.text}>Sale</Typography>
        </Box>
        <Box className={classes.boxHead}>
          <Typography className={classes.text}>Earning</Typography>
        </Box>
        <Box className={classes.boxHead}>
          <Typography className={classes.text}>Success</Typography>
        </Box>
      </div>
      {/* <div className="float-container"> */}
      {/* <OrderList />
        <Verified /> */}
      <div className={classes.indiv}>
        <OrderList />
      </div>
      <div className={classes.indiv}>
        <ProductList />
      </div>
      {/* <div className="float-child col-md-12">
          <Verified />
        </div>
      {/* </div> */}
      {/* <div></div>
      <div className="float-container">
        <div className="float-child">
          <ProductList />
        </div>
        <div className="float-child">
          <Manage />
        </div>
      </div> */}
    </div>
  );
}

export default Dashboard;
