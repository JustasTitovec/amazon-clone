import React from 'react';
import './Home.css';
import Product from '../../components/Product/Product';
import { Link } from 'react-router-dom';

import data from '../../data.js';

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/March/Fuji_TallHero_ShipATW_Modified_en_US_2x._CB419795291_.jpg"
        alt="home"
      />
      <div className="home__row">
        {data.products.map(product => {
          return (
            <Product
              id={product._id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
              key={product._id}
              details={product.details}
            />
          );
        })}
      </div>
      <div></div>
    </div>
  );
}

export default Home;
