import React from 'react';
import '../../css/BuyerProfile.css';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { createBuyerProfile } from '../../service/api';
import {connect} from 'react-redux'

function BuyerProfile({profile}) {
  const history = useHistory();
  const buyer = {
    name: '',
    rollNumber: '',
    hostelNumber: '',
    flatNumber: '',
    contactNumber: '',
  };
  const onSubmit = async () => {
    const response = await createBuyerProfile(buyerProfile);
    console.log(response);
    if (response.status === 200) {
      console.log(response.data.buyerProfile);
      history.push('/buyer/home');
    }
  };
  const onHandleChange = (e) => {
    setbuyerProfile({ ...buyerProfile, [e.target.name]: e.target.value });
    // console.log(buyerProfile);
  };
  const [buyerProfile, setbuyerProfile] = useState(buyer);

  return (
    <div>

      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">Edogaru</span>
              <span className="text-black-50">edogaru@mail.com.my</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels">Name</label>
                  <input
                    onChange={(e) => onHandleChange(e)}
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Roll Number</label>
                  <input
                    onChange={(e) => onHandleChange(e)}
                    name="rollNumber"
                    type="text"
                    className="form-control"
                    placeholder="Enter Roll Number"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Hostel Number </label>
                  <input
                    onChange={(e) => onHandleChange(e)}
                    name="hostelNumber"
                    type="text"
                    className="form-control"
                    placeholder="Enter Hostel Number"
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Flat Number</label>
                  <input
                    onChange={(e) => onHandleChange(e)}
                    name="flatNumber"
                    type="text"
                    className="form-control"
                    placeholder="Enter Flat Number"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Contact Number</label>
                  <input
                    onChange={(e) => onHandleChange(e)}
                    name="contactNumber"
                    type="text"
                    className="form-control"
                    placeholder="Enter Contact Number"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <button
                    className=" btn btn-primary"
                    onClick={(e) => onSubmit()}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    profile : state.profile,
    auth : state.auth
  }
}


export default connect(mapStateToProps, null)(BuyerProfile);
