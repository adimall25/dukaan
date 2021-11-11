import { textAlign } from '@mui/system';
import React, {useEffect, Fragment} from 'react';
import { Link , useParams, useHistory} from 'react-router-dom';
import Navbar from '../components/Dashboard/Navbar';
// import { products } from '../constants/data';
import { getProductUsingId } from '../actions/product';
import {connect} from 'react-redux';
import Spinner from './Spinner';
import {addToCart} from "../actions/cart";

const SingleProductPage = ({getProductUsingId, product, addToCart}) => {
    const {product_id} = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("YO");
        getProductUsingId(product_id);
    }, [getProductUsingId])

    //Getting product id
    return (
        product.loading || product.product === null ? <Spinner /> : <Fragment>
            <div className="App"> 
        <Navbar />
    <section class="section-content padding-y bg">
        <div class="container">


        <article class="card">
            <div class="card-body">
                    <div class="row">
                        <aside class="col-md-6">
                                <article class="gallery-wrap">
                                    <div class="thumbs-wrap">
                                        <a href="#" class="item-thumb"> <img src= {product.product.image} /></a>
                                    </div>
                                </article>
                        </aside>
                        <main class="col-md-6" style={{textAlign: 'left'}}>
                            <article>
                                <h3 class="title">{product.product.name}</h3>
                                <div>
                                    <div class="rating-stars">
                                        <p  class="stars-active"> 
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                            <i class="fa fa-star"></i>  



                                        </p>
                                        <p>
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                            <i class="fa fa-star"></i> 
                                        </p>
                                    </div>
                                </div> 

                                <hr />


                                <div class="mb-3">
                                    <h6>{product.product.description}</h6>
                                    {/* <ul class="list-dots mb-0">
                                        <p>Made in Russia</p>
                                        <p>Wolf leather </p>
                                        <p>Rubber material bottom</p>
                                        <p>Dark blue color</p>
                                    </ul> */}
                                </div>


                                <div class="form-group">
                                    <label class="text-muted">Price</label>
                                </div>

                                <div class="mb-3">
                                    <var class="price h4">Rs. {product.product.price}</var> <br />
                                    {/* <span class="monthly">$32.00 / monthly installment </span> */}
                                </div> 

                                <div class="mb-4">
                                    <a href="#" class="btn btn-primary" onClick = {() => addToCart({product_id, history})}>Add to cart</a>
                                </div>

                            </article> 
                        </main>
                    </div> 
            </div> 
        </article>
        </div>
    </section>
    </div>
        </Fragment>
        
    );
  };

  const mapStateToProps = (state) => {
      return {
        product : state.product
      }
  }

  const mapDispatchToProps = (dispatch) => {
      return {
          getProductUsingId : (product_id) => dispatch(getProductUsingId(product_id)),
          addToCart : (product_id) => dispatch(addToCart(product_id))
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SingleProductPage);