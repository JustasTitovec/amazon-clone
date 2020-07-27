import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from '../../components/Product/Product';
import Header from '../../components/Header/Header';
import data from '../../data.js';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  let products = data.products;

  useEffect(() => {
    const results = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, products]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Header value={searchTerm} onChange={handleChange} />

      <div className="home">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/March/Fuji_TallHero_ShipATW_Modified_en_US_2x._CB419795291_.jpg"
          alt="home"
        />
        <div className="home__row">
          {searchResults.map((product, i) => {
            return (
              <Product
                id={product._id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={product.image}
                details={product.details}
                key={i}
              />
            );
          })}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
