import React, {Fragment, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {connect } from "react-redux"
import { getLoggedInSellerProducts, deleteProductUsingId } from '../../actions/product';
import Spinner from '../Spinner';

function ProductList({getLoggedInSellerProducts, product, deleteProductUsingId}) {
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
            <th scope="col"></th>
            <th scope="col"></th>

          </tr>
        </thead>
        <tbody>
          {product.products.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><Link to = {`/seller/products/${item._id}`}><button className="btn btn-primary">View</button></Link></td>
                <td><button className="btn btn-danger" onClick={() => {deleteProductUsingId(item._id)}}>Delete</button></td>
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
    getLoggedInSellerProducts : () => dispatch(getLoggedInSellerProducts()),
    deleteProductUsingId : (product_id) => dispatch(deleteProductUsingId(product_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
