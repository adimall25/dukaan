import React from 'react';
import '../../css/ProfileCard.css';
// import avatar from '../images/image-rita.jpg';

function ProfileCard(props) {
  return (
    <div className="card-container">
      <header>
        <img 
          className="shopImage"
          src={props.imgLink}
          alt={props.sellerName}
        />
      </header>
      <br/> 
      <h1 className="bold-text">
        {props.name} <span className="bold-text">{props.shopName}</span>
      </h1>
      <br/>
    </div>
  );
}

export default ProfileCard;
