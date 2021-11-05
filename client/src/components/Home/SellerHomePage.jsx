import * as React from 'react';
import Sidebar from '../Dashboard/Sidebar';
import '../../css/Styles.css';
import {connect} from "react-redux";
function SellerHomePage() {
  return (
    <div className="App">
      <Sidebar />
    </div>
  );
}

export default SellerHomePage;
