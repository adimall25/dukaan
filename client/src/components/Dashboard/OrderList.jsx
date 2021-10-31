import React from 'react';
import ListItem from './ListItem';
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   success: {
//     color: "green"
//   },
//   danger: {
//     color: "red"
//   }
// });
function OrderList() {
  // const classes = useStyles();
  return (
    <div className="card">
      <h5 className="card-title card-header">Orders</h5>
      <ul className="list-group list-group-flush">
        <ListItem info="Total Order: " value="323" />
        <ListItem info="Pending Orders:" value="234" />
        <div>
          <ListItem info="Successful Orders: " value="233" />
        </div>
        <div>
          <ListItem info="Cancelled Orders: " value="324" />
        </div>
      </ul>
    </div>
  );
}

export default OrderList;
