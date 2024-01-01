import React, { useState } from "react";
import "./BuyNow.scss";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { toast } from "react-toastify";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdAssuredWorkload } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const BuyNow = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate=useNavigate();
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuyNow = () => {
    navigate('/order-now')
  };
  const handleAddToCart = () => {
    // addToCart({ id, image, name, price });
    toast.success("Added to cart");
  };

  return (
    <div className="buy-now-container">
      <div className="product-details">
        <img src="product-image-url.jpg" alt="Product" />
        <div className="details">
          <div className="inside-detail">
            <h2>Product Name</h2>
            <p>Product Description</p>
            <div className="stars">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="rating">4.8</span>
            </div>
            <p>Price:  Rs. 299</p>
          </div>

          <div className="quantity-selection">
            <button
              className="quantity-button"
              id="minus-btn"
              onClick={handleDecrement}
            >
              -
            </button>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button
              className="quantity-button"
              id="plus-btn"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>

          <div className="button-container">
            <button className="buy-now-button" onClick={handleBuyNow}>
              Buy Now
            </button>
            <button className="buy-now-button" onClick={handleAddToCart}>
              ADD TO CART <HiOutlineShoppingCart />
            </button>
          </div>
        </div>
      </div>
      <div className="assurance-div">
        <div className="assurance-box">
          <TbReplace /> 7 days replacement
        </div>
        <div className="assurance-box">
          <TbTruckDelivery /> Free Delivery
        </div>
        <div className="assurance-box">
          <GiTakeMyMoney /> Pay On Delivery
        </div>
        <div className="assurance-box">
          <FaAward />
          Top Quality
        </div>
        <div className="assurance-box">
          <MdAssuredWorkload />
          Assured Delivery
        </div>
      </div>
      <div className="review-rating">
        <div className="head">
          <h1>Customer Reviews</h1>
        </div>
        <div className="reviews">
          <div className="review">
            <div className="username">John Doe</div>
            <div className="rating">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
            </div>
            <div className="comment">Great product! I love it.</div>
          </div>
          <div className="review">
            <div className="username">Jane Smith</div>
            <div className="rating">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
            </div>
            <div className="comment">Good quality but a bit pricey.</div>
          </div>
          <div className="review">
            <div className="username">David Johnson</div>
            <div className="rating">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
            </div>
            <div className="comment">
              Absolutely amazing! Worth every penny.
            </div>
          </div>
          <div className="review">
            <div className="username">Sarah Williams</div>
            <div className="rating">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
            </div>
            <div className="comment">Fast shipping and great quality.</div>
          </div>
        </div>
        {/* Add more reviews here */}
      </div>
    <div className="similar-products">
      <div className="head"><h1>Products you may also like</h1></div>
      
    </div>
    </div>
  );
};

export default BuyNow;
