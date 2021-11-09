import { textAlign } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Dashboard/Navbar';
import { products } from '../constants/data';

const SingleProductPage = (props) => {
    console.log(props);
    let product_id=props.match.params.product_id;
    //Getting product id
    console.log(product_id);
    var item = products.find(item => item.id === product_id);
    console.log(item);
    return (
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
                                        <a href="#" class="item-thumb"> <img src= {item.url} /></a>
                                    </div>
                                </article>
                        </aside>
                        <main class="col-md-6" style={{textAlign: 'left'}}>
                            <article>
                                <a href="#" class="text-primary btn-link">{item.title.shortTitle}</a>
                                <h3 class="title">{item.title.longTitle}</h3>
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
                                    <span class="label-rating mr-3 text-muted">7/10</span>
                                    <a href="#" class="btn-link  mr-3 text-muted"> <i class="fa fa-heart"></i> Save for later </a>
                                    <a href="#" class="btn-link text-muted"> <i class="fa fa-book-open"></i> Compare </a>
                                </div> 

                                <hr />


                                <div class="mb-3">
                                    <h6>{item.description}</h6>
                                    {/* <ul class="list-dots mb-0">
                                        <p>Made in Russia</p>
                                        <p>Wolf leather </p>
                                        <p>Rubber material bottom</p>
                                        <p>Dark blue color</p>
                                    </ul> */}
                                </div>


                                <div class="form-group">
                                    <label class="text-muted">price</label>
                                    <div>
                                        <label class="js-check btn btn-check active mr-1">
                                            <input type="radio" name="option_size" value="option1" checked="" />
                                            <span>Small</span>
                                        </label>
                                        <label class="js-check btn btn-check mr-1">
                                            <input type="radio" name="option_size" value="option1" />
                                            <span>Medium</span>
                                        </label>
                                        <label class="js-check btn btn-check mr-1">
                                            <input type="radio" name="option_size" value="option1" />
                                            <span>Large</span>
                                        </label>
                                        <label class="js-check btn btn-check disabled">
                                            <input type="radio" name="option_size" disabled="" value="option1" />
                                            <span>Babies</span>
                                        </label>	
                                    </div>						
                                </div>

                                <div class="mb-3">
                                    <var class="price h4">${item.price.mrp}</var> <br />
                                    {/* <span class="monthly">$32.00 / monthly installment </span> */}
                                </div> 

                                <div class="mb-4">
                                    <a href="#" class="btn btn-primary">Buy now</a><br />
                                    <a href="#" class="btn btn-primary">Add to cart</a>
                                </div>

                            </article> 
                        </main>
                    </div> 
            </div> 
        </article>

        {/* <article class="card mt-5">
            <div class="card-body">
                <div class="row">
                    <aside class="col-md-6">
                        <h5>Parameters</h5>
                        <dl class="row">
                              <dt class="col-sm-3">Display</dt>
                              <dd class="col-sm-9">13.3-inch LED-backlit display with IPS</dd>
        
                              <dt class="col-sm-3">Processor</dt>
                              <dd class="col-sm-9">2.3GHz dual-core Intel Core i5</dd>
        
                              <dt class="col-sm-3">Camera</dt>
                              <dd class="col-sm-9">720p FaceTime HD camera</dd>
        
                              <dt class="col-sm-3">Memory</dt>
                              <dd class="col-sm-9">8 GB RAM or 16 GB RAM</dd>
                              
                              <dt class="col-sm-3">Graphics</dt>
                              <dd class="col-sm-9">Intel Iris Plus Graphics 640</dd>
                        </dl>
                    </aside>
                    <aside class="col-md-6">
                        <h5>Features</h5>
                        <ul class="list-check">
                            <p>Best performance of battery</p>
                            <p>5 years warranty for this product</p>
                            <p>Amazing features and high quality</p>
                            <p>Best performance of battery</p>
                            <p>5 years warranty for this product</p>
                        </ul>
                    </aside>
                </div> 
                <hr />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div> 
        </article> */}
        </div>



    </section>



    </div>
    );
  };

  export default SingleProductPage;