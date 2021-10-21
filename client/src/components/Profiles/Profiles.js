import React from 'react';
import ProfileCard from './ProfileCard';
import '../../css/Profiles.css';
import { Link } from 'react-router-dom';
function Profiles() {
  return (
    <div className="bg-pattern-top">
      <div className="bg-pattern-bottom profile">
        <Link to="/buyer/home/products">
          <ProfileCard shopName="Kulkarni General Store"></ProfileCard>
        </Link>
        <Link to="/buyer/home/products">
          <ProfileCard shopName="Roti Ghar "></ProfileCard>
        </Link>
        <Link to="/buyer/home/products">
          <ProfileCard shopName="Night canteen"></ProfileCard>
        </Link>
      </div>
    </div>
  );
}

export default Profiles;
