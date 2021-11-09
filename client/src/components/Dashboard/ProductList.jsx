import React, {Fragment, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {connect } from "react-redux"
import { getLoggedInSellerProducts } from '../../actions/product';
import Spinner from '../Spinner';

function ProductList({getLoggedInSellerProducts, product}) {
  useEffect(() => {
    getLoggedInSellerProducts();
  }, [getLoggedInSellerProducts])
  const items = ['sd', 'sa'];
  return (
    product.loading ? <Spinner /> : <Fragment>
       <div className="card">
      <h5 className="card-title card-header">Products</h5>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {product.products.map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">1</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to="/seller/products/add">
        <button type="button" className="btn btn-primary">
          Add Products
        </button>
      </Link>
    </div>
    </Fragment>
   
  );
}

const mapStateToProps = (state) => {
  return {
    product : state.product
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLoggedInSellerProducts : () => dispatch(getLoggedInSellerProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
