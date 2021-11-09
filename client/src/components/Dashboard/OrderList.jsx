import React, {Fragment, useEffect} from 'react';
import ListItem from './ListItem';
import {connect} from "react-redux";
import { getSellerOrders } from '../../actions/order';
import Spinner from "../Spinner"

function OrderList({sellerOrders, getSellerOrders, loading, seller}) {

  useEffect(() => {
    getSellerOrders()
  }, [getSellerOrders])

  return (
    loading === true && seller === null ? <Spinner /> : <Fragment>
       <div className="card">
        <h5 className="card-title card-header">Orders</h5>
        <ul className="list-group list-group-flush">
          <ListItem info="Total Order: " value={sellerOrders.length} />
          <ListItem info="Pending Orders:" value={sellerOrders.filter(el => el.status === "PENDING").length} />
          <div>
            <ListItem info="Successful Orders: " value={sellerOrders.filter(el => el.status === "COMPLETED").length} />
          </div>
        </ul>
      </div>
    </Fragment>
   
  );
}

const mapStateToProps = (state) => {
  return {
    sellerOrders : state.order.orders,
    loading : state.order.loading,
    seller: state.auth.seller
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSellerOrders : () => dispatch(getSellerOrders()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
