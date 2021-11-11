import React, {Fragment} from "react";
import Navbar from "../Navbar"
import "../../css/Checkout.css"

function Checkout() {
  return (
    <Fragment>
      <Navbar />
      <div style={{width : '80%', marginLeft : '10%', textAlign : 'center', padding: '30px'}}>
      <h2>Checkout Page</h2>
      <hr></hr>
        <table style ={{width:'100%'}}>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Cost</th>
          </tr>
          <br></br>
          <tr >
            <td><img src = "https://picsum.photos/150"></img></td>
            <td>Kurkure</td>
            <td>10</td>
            <td>2</td>
            <td>20</td>
          </tr>
          <br></br>
          <tr >
            <td><img src = "https://picsum.photos/150"></img></td>
            <td>Kurkure</td>
            <td>10</td>
            <td>2</td>
            <td>20</td>
          </tr>
          <br></br>
          <tr >
            <td><img src = "https://picsum.photos/150"></img></td>
            <td>Kurkure</td>
            <td>10</td>
            <td>2</td>
            <td>20</td>
          </tr>
          <br></br>
        </table>
        <hr></hr>
        <div style = {{width:'50%' , marginLeft : '25%'}}>
        <h3>Total Cost : 1000</h3>
        <br></br>
        <button className="btn btn-primary btn-large">Place Order</button>
        </div>


      </div>
    </Fragment>
    // <div className="cont">
    
    //   <div className="bask-disp">
      
    //     <div className="bask-head">
    //       <h3>Check out</h3>
    //     </div>
    //     <div className="bask-body">
        
    //       <div className="baski">
    //         <div className="baski-ihld">
    //           <img
    //             src="https://i.ibb.co/3r8XgVm/Supreme-Daniel-Johnston-Rayon-S-S-Shirt-White-01-removebg-preview.png"
    //             alt="Shirt"
    //           />
    //         </div>
    //         <div className="baski-txt">
    //           <h4>Supreme Daniel Johnston Rayon S/S Shirt</h4>
    //           <div className="exdsp">
    //             <span className="baski-price">£177.00</span>
    //             <h5>Size: Medium</h5>
    //           </div>
    //           <div className="baski-tags">
    //             <div className="baski-tag">White</div>
    //             <div className="baski-tag">Authentic</div>
    //             <div className="baski-tag">Brand new</div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="baski">
    //         <div className="baski-ihld">
    //           <img
    //             src="https://i.ibb.co/ChtnYVY/Palace-Lotties-Carp-Jean-Stone-Wash-removebg-preview.png"
    //             alt="Jeans"
    //           />
    //         </div>
    //         <div className="baski-txt">
    //           <h4>Palace Lotties Carp Jean</h4>
    //           <div className="exdsp">
    //             <span className="baski-price">£298.00</span>
    //             <h5>Size: 34</h5>
    //           </div>
    //           <div className="baski-tags">
    //             <div className="baski-tag">Stone wash black</div>
    //             <div className="baski-tag">Authentic</div>
    //             <div className="baski-tag">Brand new</div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="baski">
    //         <div className="baski-ihld">
    //           <img
    //             src="https://i.ibb.co/CwfsG6s/Converse-Chuck-Taylor-All-Star-70s-Hi-Comme-des-Garcons-PLAY-White-Product-removebg-preview.png"
    //             alt="Shoes"
    //           />
    //         </div>
    //         <div className="baski-txt">
    //           <h4>Converse Chuck Taylor All-Star 70s Hi Comme des Garcons</h4>
    //           <div className="exdsp">
    //             <span className="baski-price">£144.00</span>
    //             <h5>Size: 11</h5>
    //           </div>
    //           <div className="baski-tags">
    //             <div className="baski-tag">PLAY white</div>
    //             <div className="baski-tag">Authentic</div>
    //             <div className="baski-tag">Brand new</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="bask-foot">
    //       <table className="pricing">
    //         <tbody>
    //           <tr>
    //             <td>Total:</td>
    //             <td>£619.00</td>
    //           </tr>
    //           <tr>
    //             <td>Delivery:</td>
    //             <td>FREE</td>
    //           </tr>
    //           <tr>
    //             <td>Total to pay:</td>
    //             <td>£619.00</td>
    //           </tr>
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    //   <div className="card-disp">
    //     <div className="card-user-show">
    //       <i className="cardtypei fab"></i>
    //       <span className="cd-dsp-txt expiresend">Expires end</span>
    //       <span className="cd-dsp-txt cardholder">Card holder</span>

    //       <div className="cd-inf-txt cardnumber"></div>
    //       <div className="cd-inf-txt expiresend"></div>
    //       <div className="cd-inf-txt cardholder"></div>
    //     </div>
    //     <div className="card-input-area">
    //       <form>
    //         <div className="fgroup fullname">
    //           <label htmlFor="fullname">
    //             Full name <span>*</span>
    //           </label>
    //           <input
    //             placeholder="John Smith, etc."
    //             type="text"
    //             name="fullname"
    //             id="fullname"
    //           />
    //         </div>
    //         <div className="fgroup expire">
    //           <label htmlFor="expireMM">
    //             Expiry date <span>*</span>
    //           </label>
    //           <select name="expireMM" id="expireMM">
    //             <option disabled value="">
    //               Month
    //             </option>
    //             <option value="01">01</option>
    //             <option value="02">02</option>
    //             <option value="03">03</option>
    //             <option value="04">04</option>
    //             <option value="05">05</option>
    //             <option value="06">06</option>
    //             <option value="07">07</option>
    //             <option value="08">08</option>
    //             <option value="09">09</option>
    //             <option value="10">10</option>
    //             <option value="11">11</option>
    //             <option value="12">12</option>
    //           </select>
    //           <select name="expireYY" id="expireYY">
    //             <option disabled value="">
    //               Year
    //             </option>
    //             <option value="21">2021</option>
    //             <option value="22">2022</option>
    //             <option value="23">2023</option>
    //             <option value="24">2024</option>
    //             <option value="25">2025</option>
    //           </select>
    //         </div>
    //         <div className="fgroup cnumber">
    //           <label htmlFor="ccnumber">
    //             Card number <span>*</span>
    //           </label>
    //           <div>
    //             <input
    //               id="ccnumber"
    //               name="ccnumber"
    //               className="ccnumber"
    //               placeholder="####-####-####-####"
    //             />
    //           </div>
    //         </div>
    //         <div className="fgroup ccv">
    //           <label htmlFor="ccv">
    //             CVV <span>*</span>
    //           </label>
    //           <div>
    //             <input id="ccv" name="ccv" placeholder="123" />
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //     <div className="card-next-aera">
    //       <label htmlFor="ccv" style={{ color: "#a296fe", fontSize: "0.8rem" }}>
    //         Address <span>*</span>
    //       </label>
    //       <br />
    //       <div>
    //         <input type="text" className="address-disp" />
    //       </div>
        
    //       <div className="btns">
    //         <div className="btn btn-2">Continue to payment</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Checkout;
