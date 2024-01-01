import React from 'react';
import { login } from '../Account/login';
import './UserDetail.scss';

const UserDetail = () => {
  const userDetails = login[0];

  return (
    <div className="user-details">
      <div className='inside-userdetails'>
        <h1>Welcome!</h1>
        <div className="profile-photo">
          <img src={userDetails.profilePhoto} alt="Profile" />
          <h2>Hey! {userDetails.username}</h2>
        </div>
        <div className="info">
          <div className='address'>
            <div className='head'><h2>Address</h2></div>
            <div className='add-details'>

            
            <p>Home Address: {userDetails.address}</p>
            <p>Locality: {userDetails.locality}</p>
            <p>Landmark: {userDetails.landmark}</p>
            <p>City: {userDetails.city}</p>
            <p>Pincode: {userDetails.pincode}</p>
            <p>State: {userDetails.state}</p>
            <p>Country: {userDetails.country}</p>
            </div>
          </div>
          <div className='contact-details'>
          <div className='head'><h2>Contact</h2></div>
          <div className='cont-details'>
          <p>Phone Number: {userDetails.phoneNumber}</p>
          <p>Email Address: {userDetails.email}</p>
          </div>
       
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
