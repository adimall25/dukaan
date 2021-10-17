import React from 'react';
import '../../css/ProfileCard.css';
// import avatar from '../images/image-rita.jpg';

function ProfileCard(props) {
  return (
    <div className="card-container">
      <header>
        <img
          className="shopImage"
          src="https://thumbs.dreamstime.com/z/shop-building-colorful-isolated-white-33822015.jpg"
          alt={props.sellerName}
        />
      </header>

      <h1 className="bold-text">
        {props.name} <span className="bold-text">{props.shopName}</span>
      </h1>
    </div>
  );
}

export default ProfileCard;
