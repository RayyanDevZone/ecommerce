import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.scss';
import {HiOutlineShoppingCart} from 'react-icons/hi'
const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className='cart'>
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <div className='cart-item' key={item.id}> 
            <img src={item.image} alt={item.name} />
            <div className='items-detail'>
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
            </div>
            <div className='cart-button-container'>
            <button>BUY NOW</button>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            
            </div>
          </div>
        ))
      ) : (
        <div className="empty-cart-message">
        <h1><HiOutlineShoppingCart/></h1>
          <p>Your cart is empty. Let's shop!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
