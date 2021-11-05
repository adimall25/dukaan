import React from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  const items = ['sd', 'sa'];
  return (
    <div className="card">
      <h5 className="card-title card-header">Products</h5>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item}>
                <th scope="row">1</th>
                <td>{item}</td>
                <td>button</td>
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
  );
}

export default ProductList;
