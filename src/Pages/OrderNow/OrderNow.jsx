import React from "react";
import "./OrderNow.scss";
import {login} from '../Account/login'
import { useNavigate } from "react-router-dom";
const OrderNow = () => {
  const navigate=useNavigate();
  const handlenavigate=()=>{
    navigate('/payment')
  }
  return (
    <div className="OrderNow">
      <div className="inside-summary">
        <div className="head">
          <h1>Order Summary</h1>
        </div>
        <div className="ordered-product">
          <div className="left-div">
            <img
              src="https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg"
              alt=""
            />
          </div>
          <div className="right-div">
            <h3>Product Name:Mobile Cover</h3>
            <h3>Quantity:1</h3>
            <h3>Price:299</h3>
          </div>
        </div>
        <div className="shipping-address">
          <div className="head">
            <h2>Shipping Address</h2>
          </div>
          <div className="add-details">
            <p>Home Address: {login[0].address}</p>
            <p>Locality: {login[0].locality}</p>
            <p>Landmark: {login[0].landmark}</p>
            <p>City: {login[0].city}</p>
            <p>Pincode: {login[0].pincode}</p>
            <p>State: {login[0].state}</p>
            <p>Country: {login[0].country}</p>
          </div>
          <div className="address-buttons">
            <button className="edit-address">Edit Address</button>
            <button className="this-address" onClick={handlenavigate}>Deliver to this Address</button>
          </div>
          <div className="payment-button">
            <button className="this-address" id="pay" onClick={handlenavigate}>Proceed to Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
