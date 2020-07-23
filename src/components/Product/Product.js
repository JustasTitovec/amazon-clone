import React from 'react';
import './Product.css';
import { useStateValue } from '../../state/StateProvider.js';
import { Link } from 'react-router-dom';

function Product({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    });
  };

  return (
    <div className="product">
      <Link to={`/details/${id}`}>
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map(_ => (
                <p>⭐️</p>
              ))}
          </div>
        </div>
      </Link>
      <img src={image} alt="watch" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
