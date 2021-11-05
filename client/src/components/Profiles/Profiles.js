import React from 'react';
import ProfileCard from './ProfileCard';
import '../../css/Profiles.css';
import { Link } from 'react-router-dom';
import { style } from '@mui/system';

function Profiles() {
  return (
    <div className="bg-pattern-top" >
      <div className="bg-pattern-bottom profile">
        <Link to="/buyer/home/products">
          <ProfileCard shopName="Kulkarni General Store" imgLink="https://thumbs.dreamstime.com/z/shop-building-colorful-isolated-white-33822015.jpg" ></ProfileCard>
        </Link>
        <Link to="/buyer/home/products">
          <ProfileCard shopName="Roti Ghar" imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsWLvqhyhTBb1BhHg6XwIM5cu4sf2RIt3uQQ&usqp=CAU"></ProfileCard>
        </Link>
        <Link to="/buyer/home/products">
          <ProfileCard shopName="Night canteen" imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0peucPkGvrd2eUnWKXAs9lymX0lrwfnUvMA&usqp=CAU"></ProfileCard>
        </Link>
      </div>
    </div>
  );
}

export default Profiles;
