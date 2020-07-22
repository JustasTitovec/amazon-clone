import React from 'react';
import { useStateValue } from '../../state/StateProvider';
import Product from '../Product/Product';

function Details({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div>
      {/* {basket.map(item => (
        <Product
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))} */}
    </div>
  );
}

export default Details;
