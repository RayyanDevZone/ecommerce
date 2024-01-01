import React, { useEffect, useContext, useState } from 'react';
import './Keychains.scss';
import banner from '../../videos/keybanner.mp4';
import { data } from './data.js';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { CartContext } from '../Addtocart/CartContext';
import { toast } from 'react-toastify';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { WishlistContext } from '../../Contexts/WishlistContext';
import { useNavigate } from 'react-router-dom';
const Product = ({ id, image, name, price }) => {
  const { addToCart } = useContext(CartContext);
  const [isWished, setIsWished] = useState(false);
  const { wishlistItems, addToWishlist, removeFromWishlist } = useContext(WishlistContext);
  const navigate=useNavigate();
  const handleToggleWishlist = () => {
    setIsWished(prevState => !prevState);

    if (!isWished) {
      addToWishlist({ id, image, name, price });
      toast.success('Item added to wishlist!');
    } else {
      removeFromWishlist(id);
      toast.success('Item removed from wishlist.');
    }
  };

  const handleAddToCart = () => {
    addToCart({ id, image, name, price });
    toast.success('Added to cart');
  };
  const handleBuyNow = () => {
   
    navigate('/buy-now');
  };

  return (
    <div className='product-card' key={id}  >
      <div className="heart-icon" onClick={handleToggleWishlist}>
        {isWished ? <AiFillHeart className='filledheart' /> : <AiOutlineHeart />}
      </div>
      <img src={image} alt={name} />
      <div className='details'>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>Rating: {data.products[id - 1].rating}</p>
        <p>{data.products[id - 1].sold}</p>
      </div>
      <button onClick={handleBuyNow}>BUY NOW</button>
      <button onClick={handleAddToCart}>ADD TO CART <HiOutlineShoppingCart /></button>
    </div>
  );
};

const Keychains = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='key'>
      <div className='key-banner'>
        <video src={banner} autoPlay loop muted id='key-vdo'></video>
      </div>
      <div className='keychain-products'>
        {data.products.map(product => (
          <Product key={product.id} id={product.id} image={product.image} name={product.name} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default Keychains;
