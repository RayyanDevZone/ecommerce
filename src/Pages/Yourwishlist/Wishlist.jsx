import React, { useContext } from 'react';
import { WishlistContext } from '../../Contexts/WishlistContext';
import './Wishlist.scss'
import { AiFillHeart } from 'react-icons/ai';
const Wish = () => {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className='wishlist'>
      
      {wishlistItems.length > 0 ? (
        <div className='wishlist-items'>
          {wishlistItems.map(item => (
            <div className='wishlist-item' key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className='item-details'>
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
              </div>
              <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      ) : (<div className="empty-cart-message">
      <h2><AiFillHeart/></h2>
        <p>Your wishlist is empty.</p>
        </div>
      )}
    </div>
  );
};

export default Wish;
