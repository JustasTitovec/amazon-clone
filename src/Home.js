import React from 'react';
import './Home.css';
import Product from './Product.js';

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/March/Fuji_TallHero_ShipATW_Modified_en_US_2x._CB419795291_.jpg"
        alt="home"
      />
      <Product
        id="12123124312"
        title="Samsung Galaxy Watch smartwatch (46mm, GPS, Bluetooth) – Silver/Black (US Version with Warranty)"
        price={11.96}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/61pCZHNb6iL._AC_SL1500_.jpg"
      />
    </div>
  );
}

export default Home;
