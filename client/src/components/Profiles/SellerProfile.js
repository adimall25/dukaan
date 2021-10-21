import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../css/BuyerProfile.css';
import { Link } from 'react-router-dom';
import { createSellerProfile } from '../../service/api';
function SellerProfile() {
  const history = useHistory();
  const seller = {
    name: '',
    shopName: '',
    shopAddress: '',
    contactNumber: '',
  };

  const onHandleChange = (e) => {
    setSellerProfile({ ...sellerProfile, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    const response = await createSellerProfile(sellerProfile);
    if (response.status === 200) {
      console.log(response.data.sellerProfile);
      history.push('/seller/home');
    }
  };

  const [sellerProfile, setSellerProfile] = useState(seller);
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
                    type="text"
                    value={sellerProfile.name}
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Shop Name</label>
                  <input
                    onChange={(e) => onHandleChange(e)}
                    type="text"
                    name="shopName"
                    value={sellerProfile.shopName}
                    className="form-control"
                    placeholder="Enter Shop Name"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Shop Address </label>
                  <input
                    onChange={(e) => onHandleChange(e)}
                    type="text"
                    name="shopAddress"
                    value={sellerProfile.shopAddress}
                    className="form-control"
                    placeholder="Enter shop address"
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Contact Number</label>
                  <input
                    onChange={(e) => onHandleChange(e)}
                    type="text"
                    name="contactNumber"
                    value={sellerProfile.contactNumber}
                    className="form-control"
                    placeholder="Enter Contact Number"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <button className=" btn btn-primary" onClick={onSubmit}>
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

export default SellerProfile;
