import React from 'react';
import ProfileCard from './ProfileCard';
import '../../css/Profiles.css';
function Profiles() {
  return (
    <div className="bg-pattern-top">
      <div className="bg-pattern-bottom profile">
        <ProfileCard shopName="Kulkarni General Store"></ProfileCard>
        <ProfileCard shopName="Roti Ghar "></ProfileCard>
        <ProfileCard shopName="Night canteen"></ProfileCard>
      </div>
    </div>
  );
}

export default Profiles;
