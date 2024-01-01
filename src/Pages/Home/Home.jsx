import React from 'react';
import './Home.scss';
import { products } from './products';
import salebanner from '../../videos/salebanner.mp4';
import { useNavigate } from 'react-router-dom'; 

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='home'>
        <video src={salebanner} autoPlay loop muted id='vdo'>
        </video>
      </div>
      <div className='category'>
        {products.map((product) => (
          <div
            className='card'
            key={product.id}
            onClick={() => navigate(product.url)} 
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
