import React from 'react';
import { useStateValue } from '../../state/StateProvider';
import Product from '../Product/Product';
import data from '../../data.js';

function Details({ id }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(data.products[0]._id);
  const product = data.products;

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
}

export default Details;
