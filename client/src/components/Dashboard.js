import React from 'react';
import BoxSx from './Box';
import '../css/Box.css';
import OrderList from './OrderList';
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="Box">
        <BoxSx color="#1976d2" content="Products" />
        <BoxSx color="#1976d2" content="Total Sale" />
        <BoxSx color="#1976d2" content="Successful Orders " />
        <BoxSx color="#1976d2" content="Total Earning" />
      </div>
      {/* <OrderList /> */}
    </div>
  );
}

export default Dashboard;
